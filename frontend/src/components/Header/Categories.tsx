import { Link } from "react-router-dom";
import type { Categories } from "../../data.type.ts";

export default function Categories({ category, onSelect }: Categories) {
  return (
    <ul className="category-list">
      <h2>Categorias</h2>

      {category.map(({ id, name }) => (
        <li key={id} className="category-list__item" role="list">
          <Link to={`/menu/${id}`} onClick={onSelect}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
