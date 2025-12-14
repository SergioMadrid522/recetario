import { useState } from "react";
import { ErrorAlert, SuccessAlert } from "../../utils/Alerts/Alerts.ts";
import type { EditDishModalProps } from "../../../data.type.ts";
import { options } from "../../../data.ts";
import EditDishContent from "./EditDishContent.tsx";

export default function EditDish({ dish }: EditDishModalProps) {
  const { nombre, ingredientes, instrucciones, imagen, id_categoria } = dish;
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

  const { id_platillo } = dish;

  const [platillo, setPlatillo] = useState({
    nombre: nombre,
    ingredientes: ingredientes,
    instrucciones: instrucciones,
    imagen: imagen,
    id_categoria: id_categoria,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const apiURL = import.meta.env.VITE_MODIFY_DISH_URL;
    const { nombre, ingredientes, instrucciones, id_categoria, imagen } =
      platillo;
    try {
      let imageUrl = imagen;

      if (imagen instanceof File) {
        const formData = new FormData();
        formData.append("file", imagen);
        formData.append("upload_preset", UPLOAD_PRESET);

        const cloudRes = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });

        const cloudData = await cloudRes.json();

        if (!cloudRes.ok)
          throw new Error(cloudData.error?.message || "Error al subir imagen");

        imageUrl = cloudData.secure_url;
      }

      const res = await fetch(apiURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_platillo: id_platillo,
          nombre: nombre,
          ingredientes: ingredientes,
          instrucciones: instrucciones,
          id_categoria: id_categoria,
          imagen: imageUrl,
        }),
      });

      const data = await res.json();
      const { message, errors } = data;
      const { id } = options[0];

      if (!res.ok) {
        throw new Error(
          Array.isArray(errors)
            ? errors.join(", ")
            : "Error al hacer la solicitud a la base de datos"
        );
      }

      SuccessAlert(message);

      setPlatillo({
        nombre: nombre,
        ingredientes: ingredientes,
        instrucciones: instrucciones,
        imagen: imageUrl,
        id_categoria: id,
      });
      console.log(platillo);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorAlert(error);
      } else {
        ErrorAlert(String(error));
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="edit-modal-main">
        <h2 className="main-titles">Modificar platillo</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <EditDishContent
            platillo={platillo}
            setPlatillo={setPlatillo}
            options={options}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
}
