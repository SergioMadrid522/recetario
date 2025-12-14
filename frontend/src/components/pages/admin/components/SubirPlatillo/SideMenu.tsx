import { NavLink } from "react-router-dom";
import { sideMenuOptions } from "../../../../../data";
import type { SideMenuProps } from "../../../../../data.type.ts";

export default function SideMenu({ open, toggleOpen }: SideMenuProps) {
  return (
    <>
      <aside className={`side-menu ${open ? "active" : ""}`}>
        <h2 className="main-titles" id="inicio">
          Bienvenida!
        </h2>

        {sideMenuOptions.map(({ link, optionName }, idx) => (
          <div className="side-menu__option-container" key={idx}>
            <NavLink to={`/${link}`} className="option" onClick={toggleOpen}>
              {optionName}
            </NavLink>
          </div>
        ))}
      </aside>
    </>
  );
}
