/* import { useState } from "react";
import { options } from "../data.ts";
import { ErrorAlert, SuccessAlert } from "../../../Alerts/alerts.ts";
export const handleSubmit = async (e: React.FormEvent) => {
  const [platillo, setPlatillo] = useState({
    nombre: "",
    ingredientes: "",
    instrucciones: "",
    imagen: null as File | null,
    id_categoria: options[0].id,
  });
  const apiURL = "http://localhost:3000/agregarPlatillo";
  e.preventDefault();
  try {
     const storageRef = ref(storage, `imagenes/${Date.now()}-${platillo.imagen.name}`);
            await uploadBytes(storageRef, platillo.imagen);
            const url = await getDownloadURL(storageRef);

            await fetch(apiURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...platillo, imageUrl: url}),
            })
            alert("Platillo subido con exito");
            setPlatillo({
                nombre: "",
                ingredientes: "",
                instrucciones: "",
                imagen: null,
                categoria: options[0] 
            }); 
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
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        Array.isArray(data.errors)
          ? data.errors.join(",")
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
  }
};
 */
