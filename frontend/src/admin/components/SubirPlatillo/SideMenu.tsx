import { NavLink } from "react-router-dom";
import { sideMenuOptions } from "../data.ts";
type sideMenuProps = {
  open: boolean;
  toggleOpen: () => void;
};
function SideMenu({ open, toggleOpen }: sideMenuProps) {
  return (
    <>
      <aside className={`side-menu ${open ? "active" : ""}`}>
        <h2 className="main-titles" id="inicio">
          Bienvenida!
        </h2>
        {sideMenuOptions.map((option, idx) => (
          <div className="side-menu__option-container" key={idx}>
            <NavLink
              to={`/${option.link}`}
              className="option"
              onClick={toggleOpen}
            >
              {option.optionName}
            </NavLink>
          </div>
        ))}
      </aside>
    </>
  );
}

export default SideMenu;
