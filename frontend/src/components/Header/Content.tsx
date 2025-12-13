import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchModal from "./content/SearchModal";
import Logo from "./content/Logo";

function Content() {
  const location = useLocation();
  const HIDDEN_PATHS = ["/admin/subir-platillo", "/admin/home"];

  const searchPaths = HIDDEN_PATHS.includes(location.pathname);

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {!searchPaths && (
        <div className="search-wrap">
          <button
            className="search-wrap__open-modal-btn"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            <span className="show-search-link__text">Buscar platillo</span>
          </button>

          <SearchModal open={openModal} setOpenModal={setOpenModal} />
        </div>
      )}

      <Logo />
    </>
  );
}

export default Content;
