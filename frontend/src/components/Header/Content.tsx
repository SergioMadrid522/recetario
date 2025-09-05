/* import type { Dish } from "../Main/type.ts";
import { dishes } from "../Main/data.ts"; */
import type { searchModalProps } from "./type.ts";

import { useLocation } from "react-router-dom";
import { useState } from "react";

/* type filteredProducts = {
    products: Dish[];
} */

function Content() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpenModal(!openModal)
    };
    const location = useLocation();
    const hideSearch = location.pathname === "/subir-platillo";
    return (
        <>  
        {!hideSearch && (
            <div className="search-wrap">
                <a className="search-wrap__open-modal" href="#" onClick={handleOpenModal}>
                    <span className="search-icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="bi bi-search"
                        viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </span>
                    <span className="show-search-link__text">Buscar en la tienda</span>
                </a>
                <SearchModal 
                open={openModal} 
                setOpenModal={setOpenModal}
                />
            </div>
            )}
            <Logo/>
        </>
    );
}

function Logo() {
    return (
        <div className="logo-container">
            <a href="" className="logo-link">
                <span className="logo-link__brand">Glenda Recetario</span>
            </a>
        </div>
    );
}

function SearchModal({open, setOpenModal}: searchModalProps) {
    const [query, setQuery] = useState("");
    /* const filteredProducts = dishes.filter(dish => 
        dish.nombre.toLowerCase().includes(query.toLowerCase()),[query]
    ); */
    return (
        <>
            <div 
            className={`search-modal ${open ? 'active' : ''} `}
            >
                <div className="search-modal__container">
                <form action="">
                    <input
                    type="text"
                    placeholder="¿Qué te quieres preparar hoy?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                    type="button"
                    className="modal-button search-button">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="bi bi-search"
                        viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </form>
                <button 
                type="button"
                className="modal-button close-button"
                onClick={() => setOpenModal(false)}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
                </div>
            </div>
            {/* { open && <ShowDish products={filteredProducts}/> } */}
        </>
    );
}

/* function ShowDish({ products }: filteredProducts) {
    const [open, setOpen] = useState(false);
    const showProducts = () => {setOpen(!open)};
    return(
        <>
            <div className="find-product">
                <h2>Productos encontrados</h2>
                {products.length > 0 ? (
                  <ul>
                    {products.map((dish) => (
                        <li key={dish.nombre}>
                            <a href={dish.link}>{dish.nombre}</a>
                        </li>
                    ))}
                  </ul>
                ):
                <p>No se encontraron resultados.</p>
                }
            </div>
        </>
    );
} */
export default Content;