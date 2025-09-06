import { useState } from "react";
import { sideMenuOptions, options } from "./data.ts";

function SubirPlatillo() {
    return (
        <main>
            <SideMenu/>
            <UploadDish/>
        </main>
    );
}

function SideMenu() {
    return(
        <aside className="side-menu">
            <h2>Bienvenida!</h2>
            {sideMenuOptions.map((option, idx) => (
                <div className="option" key={idx}>
                    <a href={option.link}>{option.option}</a>
                </div>
            ))}                
        </aside>
    );
}

function UploadDish() {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(platillo);
    };
    return (
        <div className="upload-dish-wapper">
            <h2>Subir platillo</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Subir Platillo</button>
            </form>
        </div>
    );
}

export default SubirPlatillo;