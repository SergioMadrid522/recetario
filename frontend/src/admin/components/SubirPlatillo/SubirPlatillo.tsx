import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sideMenuOptions, options } from "../data.ts";

import "./SubirPlatillo.css"
import Home from "../Home/Home.tsx";

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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    
    return (
        <>
            <div className="main-wapper">
                <h2 className="main-titles">Subir platillo</h2>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <UploadDishFormContent/>
                </form>
            </div>  
        </>
    );
}

function UploadDishFormContent() {
    const [platillo, setPlatillo] = useState({
        nombre: "",
        ingredientes: "",
        instrucciones:"",
        imagen: null as File | null,
        categoria: options[0]
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | 
        HTMLTextAreaElement | 
        HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (files) {
            setPlatillo({ ...platillo, [name]: files[0] });
        } else {
            setPlatillo({ ...platillo, [name]: value });
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
                <input 
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={handleChange}
                />
                <select 
                    name="categoria"
                    value={platillo.categoria}
                    onChange={handleChange}
                >
                    {options.map((option, idx) => (
                        <option value={option} key={idx}>{option}</option>
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