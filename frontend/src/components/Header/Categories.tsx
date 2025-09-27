import type { category } from "./type.ts";
import { Link } from "react-router-dom";

function Categories({ category, onSelect }: category) {
  return (
    <ul className="category-list">
      <h2>Categorias</h2>
      {category.map((item) => (
        <li key={item.id} className="category-list__item">
          <Link to={`/menu/${item.id}`} onClick={onSelect}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
