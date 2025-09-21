import type { UploadDishFormContentProps } from "../../../components/Main/type.ts";

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sideMenuOptions, options } from "../data.ts";

/* Firebase */
/* import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.ts"; */

import "./SubirPlatillo.css"
import Home from "../Home/Home.tsx";
//import { categories } from "../../../components/Header/data.ts";

function SubirPlatillo() {
    const location = useLocation();
    const hideUploadDish = location.pathname === "/admin/subir-platillo";
    return (
        <div className="upload-dish-menu">
            <SideMenu/>
            {hideUploadDish && (
                <UploadDish/>
            )}
            <Home/>
        </div>
    );
}

function SideMenu() {
    return(
        <>
            <aside className="side-menu">
                <h2 className="main-titles" id="inicio">Bienvenida!</h2>
                {sideMenuOptions.map((option, idx) => (
                    <div className="side-menu__option-container" key={idx}>
                        <NavLink to={`/${option.link}`} className="option">{option.optionName}</NavLink>
                    </div>
                ))}
            </aside>  
        </>
    );
}

function UploadDish() {
    const [platillo, setPlatillo] = useState(({
        nombre: "",
        ingredientes: "",
        instrucciones: "",
        imagen: null as File | null,
        id_categoria: options[0].id
    }));
    
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
                    id_categoria: platillo.id_categoria
                })
            });
            if (!res.ok) {
                alert("Error al subir el platillo")
                return;
            }
            alert("Platillo subido");
            setPlatillo({
                nombre: "",
                ingredientes: "",
                instrucciones: "",
                imagen: null,
                id_categoria: options[0].id
            });
        } catch (error) {
            console.error("Error", error)
            alert("Error al subir el platillo")
        }
    };
    
    return (
        <>
            <div className="main-wapper">
                <h2 className="main-titles">Subir platillo</h2>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <UploadDishFormContent platillo={platillo} setPlatillo={setPlatillo}/>
                </form>
            </div>  
        </>
    );
}

function UploadDishFormContent({ platillo, setPlatillo }: UploadDishFormContentProps) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === "imagen" && files) {
            setPlatillo(prev => ({ ...prev, imagen: files[0] }));
        } else if (name === "categoria") {
            setPlatillo(prev => ({ ...prev, id_categoria: Number(value) }));
        } else {
            setPlatillo(prev => ({ ...prev, [name]: value }));
        }
    };
    return (
        <>
            <input 
                type="text"
                name="nombre"
                value={platillo.nombre}
                onChange={handleChange}
                className="inputs"
                placeholder="¿Cómo se llama el platillo?"
            />
            <textarea
                name="ingredientes"
                value={platillo.ingredientes}
                onChange={handleChange}
                className="text-areas"
                placeholder="¿Cuáles son los ingredientes del platillo?"
            />
            <textarea
                name="instrucciones"
                value={platillo.instrucciones}
                onChange={handleChange}
                className="text-areas"
                placeholder="Escribe aquí las instrucciones del platillo"
            />
            <div className="file-category">
                {/* <input 
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={handleChange}
                /> */}
                <select 
                    name="categoria"
                    value={platillo.id_categoria}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="submit-button">
                <button type="submit">Subir Platillo</button>
            </div>
        </>
    );
}


export default SubirPlatillo;