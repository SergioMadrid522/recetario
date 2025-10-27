/* libraries */
import { useState } from "react";
import { useLocation } from "react-router-dom";
/* data */
import { options } from "../pages/admin/components/data.ts";
import { ErrorAlert, SuccessAlert } from "../utils/Alerts/Alerts.ts";
/* componets */
import DishFormContent from "../pages/admin/components/SubirPlatillo/DishFormContent";

function UploadDish() {
  const location = useLocation();
  const editDishModal = location.pathname.includes("/admin/home");

  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

  const [platillo, setPlatillo] = useState({
    nombre: "",
    ingredientes: "",
    instrucciones: "",
    imagen: null as File | null,
    id_categoria: options[0].id,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiURL = "http://192.168.0.10:3000/api/agregarPlatillo";

    try {
      let imageUrl = "";

      if (platillo.imagen) {
        const formData = new FormData();
        formData.append("file", platillo.imagen);
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
          nombre: platillo.nombre,
          ingredientes: platillo.ingredientes,
          instrucciones: platillo.instrucciones,
          id_categoria: platillo.id_categoria,
          imagen: imageUrl || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          Array.isArray(data.errors)
            ? data.errors.join(", ")
            : "Error al hacer la solicitud a la base de datos"
        );
      }

      SuccessAlert(data.message);

      setPlatillo({
        nombre: "",
        ingredientes: "",
        instrucciones: "",
        imagen: null,
        id_categoria: options[0].id,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorAlert(error);
      } else {
        ErrorAlert(String(error));
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className={editDishModal ? "edit-modal-main" : "main-wrapper"}>
        <h2 className="main-titles">Subir platillo</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <DishFormContent
            platillo={platillo}
            setPlatillo={setPlatillo}
            options={options}
          />
        </form>
      </div>
    </>
  );
}

export default UploadDish;
