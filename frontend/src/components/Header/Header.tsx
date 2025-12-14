import { useLocation } from "react-router-dom";
import { GLOBAL, options } from "../../data.ts";
import { useMenu } from "../utils/MenuProvider";
import Content from "./Content";
import Category from "./Categories";
function Header() {
  const location = useLocation();
  const { open, setOpen } = useMenu();
  const { hamburgerSvg } = GLOBAL;

  const HIDDEN_PATHS = ["/admin/subir-platillo", "/admin/home"];
  const hideCategories = HIDDEN_PATHS.includes(location.pathname);

  const toogleMenu = () => setOpen((prev) => !prev);
  return (
    <>
      <header>
        <nav className={hideCategories ? "onlyLogo" : ""}>
          <Content />
          <button
            className="categoryMenuBtn"
            type="button"
            onClick={toogleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d={hamburgerSvg} />
            </svg>
          </button>
        </nav>
        {!hideCategories && (
          <div className={`categories-container ${open ? "active" : ""}`}>
            <Category category={options} onSelect={() => setOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
