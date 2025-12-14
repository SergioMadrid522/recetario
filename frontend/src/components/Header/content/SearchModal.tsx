import { GLOBAL } from "../../../data";
import { useState } from "react";
import ShowDish from "./ShowDish";
import type { SearchModalProps } from "../../../data.type.ts";

export default function SearchModal({ open, setOpenModal }: SearchModalProps) {
  const { searchIconSvg, closeIconSvg } = GLOBAL;
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
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
                <path d={searchIconSvg} />
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
              <path d={closeIconSvg} />
            </svg>
          </button>
        </div>
      </div>
      {open && <ShowDish query={query} setOpenModal={setOpenModal} />}
    </>
  );
}
