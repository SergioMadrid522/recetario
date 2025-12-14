import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
  { label: "Inicio", path: "/" },
  { label: "Subir platillo", path: "/admin/subir-platillo" },
];

export default function MenuContent() {
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}
