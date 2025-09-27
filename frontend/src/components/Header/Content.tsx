//import type { Dish } from "../Main/type.ts";
//import { dishes } from "../Main/data.ts";
import { NavLink } from "react-router-dom";
import type { searchModalProps } from "./type.ts";

import { useLocation } from "react-router-dom";
import { useState } from "react";

function Content() {
  const location = useLocation();
  const hideSearchUploadDish = location.pathname === "/admin/subir-platillo";
  const hideSearchHome = location.pathname === "/admin/home";

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return (
    <>
      {!hideSearchUploadDish && !hideSearchHome && (
        <div className="search-wrap">
          <a
            className="search-wrap__open-modal"
            href="#"
            onClick={handleOpenModal}
          >
            <span className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <span className="show-search-link__text">Buscar platillo</span>
          </a>
          <SearchModal open={openModal} setOpenModal={setOpenModal} />
        </div>
      )}
      <Logo />
    </>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/recetario" className="logo-link">
        <span className="logo-link__brand">Glenda Recetario</span>
      </NavLink>
    </div>
  );
}

function SearchModal({ open, setOpenModal }: searchModalProps) {
  const [query, setQuery] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  //const
  return (
    <>
      <div className={`search-modal ${open ? "active" : ""}`}>
        <div className="search-modal__container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="¿Qué te quieres preparar hoy?"
              value={query}
              onChange={handleInputChange}
            />
            <button type="button" className="modal-button search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
          <button
            type="button"
            className="modal-button close-button"
            onClick={() => setOpenModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
      </div>
      {/*  { open && <ShowDish query={query}/> }  */}
    </>
  );
}
/* 
function ShowDish({ products, query }: {products: Dish[] query: string}) {
    const filteredProducts = products.filter((dish) =>
        dish.nombre.toLowerCase().includes(query.toLowerCase())
    );
    return(
        <>
            {query && (
                <div className={`find-product ${query ? 'active': ''}`}>
                <h2>Productos relacionados</h2>
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map((dish) => (
                            <li key={dish.nombre}>
                                <a href={dish.link}>{dish.nombre}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <p>No se encontraron resultados.</p>
                )}
            </div>
            )}
        </>
    );
    
} */
export default Content;
