import { useLocation } from "react-router-dom";

import Content from "./Content";
import Category from "./Categories";
import { options } from "../../admin/components/data.ts";
import { useMenu } from "../../MenuProvider";

function Header() {
  const location = useLocation();
  const hideCategoryPaths = ["/admin/subir-platillo", "/admin/home"];
  const hideCategories = hideCategoryPaths.includes(location.pathname);

  const { open, setOpen } = useMenu();
  const handleClick = () => setOpen(!open);
  return (
    <>
      <header>
        <nav className={hideCategories ? "onlyLogo" : ""}>
          <Content />

          <button
            className="categoryMenuBtn"
            type="button"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
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
