import { Link } from "react-router-dom";
import { useDishes } from "../../utils/DishContext";
import type { ShowDishProps } from "../../../data.type.ts";

export default function ShowDish({ query, setOpenModal }: ShowDishProps) {
  const { dishes } = useDishes();

  if (!dishes.length) {
    return <p>Cargando platillos...</p>;
  }

  const filteredProducts = dishes.filter((dish) =>
    dish.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {query && (
        <div className={`find-product ${query ? "active" : ""}`}>
          <h2>Productos relacionados</h2>

          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map(({ nombre }) => (
                <li key={nombre}>
                  <Link
                    to={`/menu/platillo/${nombre}`}
                    rel="noopener noreferrer"
                    onClick={() => setOpenModal(false)}
                  >
                    {nombre}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      )}
    </>
  );
}
