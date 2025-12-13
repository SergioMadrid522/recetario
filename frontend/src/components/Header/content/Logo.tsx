import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/recetario" className="logo-link">
        <span className="logo-link__brand">Glenda Recetario</span>
      </NavLink>
    </div>
  );
}
