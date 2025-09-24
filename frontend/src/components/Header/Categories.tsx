import type { category } from "./type.ts";
import { Link } from "react-router-dom";

function Categories({ category }: category) {
  return (
    <ul className="category-list">
      {category.map((item) => (
        <li key={item.id} className="category-list__item">
          <Link to={`/menu/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
