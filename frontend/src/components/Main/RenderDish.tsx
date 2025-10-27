/* libraries */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
/* types */
import type { Dish } from "./type.ts";
/* components */
import AdminBtns from "./AdminBtns";

type RenderDishProps = {
  dishes?: Dish[];
  onSelect?: (dishId: number) => void;
};

function RenderDish({ dishes }: RenderDishProps) {
  const location = useLocation();
  const hideAdminBtns = location.pathname === "/admin/home";
  const [data, setData] = useState<Dish[] | null>(dishes || null);
  const apiUrl = "http://192.168.0.10:3000/api/getDishes";

  useEffect(() => {
    if (!dishes) {
      async function fetchData() {
        try {
          const res = await fetch(apiUrl);
          if (!res.ok) throw new Error("Error al cargar el platillo");
          const result = await res.json();
          setData(result.dishes || []);
        } catch (error) {
          console.error("Error fetching dishes:", error);
        }
      }
      fetchData();
    } else {
      setData(dishes);
    }
  }, [dishes]);

  if (!data) return <p className="loading-content">Cargando...</p>;
  if (data.length === 0)
    return (
      <p className="content-not-found">
        No tienes ningún platillo para mostrar :(
      </p>
    );

  return (
    <>
      {data.map((dish, idx) => {
        return (
          <article className="dish-container" key={dish.id_platillo || idx}>
            <div className="dish-container__card">
              <Link
                to={`/menu/platillo/${dish.nombre}`}
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={dish.imagen} alt={dish.nombre} />
                </div>
                <h2>{dish.nombre}</h2>
              </Link>
            </div>

            {/* Admin Btns */}
            {hideAdminBtns && (
              <AdminBtns dishName={dish.nombre} dishId={dish.id_platillo} />
            )}
          </article>
        );
      })}
    </>
  );
}

export default RenderDish;
