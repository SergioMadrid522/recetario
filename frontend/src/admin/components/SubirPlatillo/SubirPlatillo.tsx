import { useState } from "react";
import { useLocation } from "react-router-dom";
import { options } from "../data.ts";
import { ErrorAlert, SuccessAlert } from "../../../Alerts/alerts.ts";
import DishFormContent from "./DishFormContent";
import SideMenu from "./SideMenu";
/* Firebase */
/* import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.ts"; */

import "./SubirPlatillo.css";
import Home from "../Home/Home.tsx";
import { useMenu } from "../../../MenuProvider";
//import { categories } from "../../../components/Header/data.ts";

function SubirPlatillo() {
  const location = useLocation();
  const hideUploadDish = location.pathname === "/admin/subir-platillo";
  const { open, setOpen } = useMenu();
  const handleClick = () => setOpen(!open);
  return (
    <div className="upload-dish-menu">
      <SideMenu open={open} toggleOpen={handleClick} />
      {hideUploadDish && <UploadDish />}
      <Home />
    </div>
  );
}

function UploadDish() {
  const [platillo, setPlatillo] = useState({
    nombre: "",
    ingredientes: "",
    instrucciones: "",
    imagen: null as File | null,
    id_categoria: options[0].id,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    const apiURL = "http://localhost:3000/agregarPlatillo";
    e.preventDefault();
    try {
      /* const storageRef = ref(storage, `imagenes/${Date.now()}-${platillo.imagen.name}`);
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
            }); */
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

  return (
    <>
      <div className="main-wrapper">
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

export default SubirPlatillo;
