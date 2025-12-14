/* libraries */
import { useState } from "react";
/* data */
import { ErrorAlert, SuccessAlert } from "../../utils/Alerts/Alerts.ts";
/* componets */
import DishFormContent from "../../pages/admin/components/SubirPlatillo/DishFormContent.tsx";
import { options } from "../../../data.ts";

function UploadDish() {
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

  const [platillo, setPlatillo] = useState({
    nombre: "",
    ingredientes: "",
    instrucciones: "",
    imagen: null as string | File | null,
    id_categoria: options[0].id,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const apiURL = import.meta.env.VITE_ADD_DISH_URL;
    const { nombre, ingredientes, instrucciones, id_categoria, imagen } =
      platillo;

    try {
      let imageUrl = "";

      if (imagen) {
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        nombre: "",
        ingredientes: "",
        instrucciones: "",
        imagen: null,
        id_categoria: id,
      });
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
      <div className="main-wrapper">
        <h2 className="main-titles">Subir platillo</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <DishFormContent
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

export default UploadDish;
