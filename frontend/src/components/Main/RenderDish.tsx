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
  const [dishesData, setDishesData] = useState<Dish[] | null>(dishes || null);

  const apiUrl = "http://192.168.0.10:3001/api/getDishes";

  useEffect(() => {
    if (!dishes) {
      async function fetchData() {
        try {
          const res = await fetch(apiUrl);

          if (!res.ok) throw new Error("Error al cargar el platillo");

          const data = await res.json();
          const { dishes } = data;
          setDishesData(dishes);
        } catch (error) {
          console.error("Error fetching dishes:", error);
        }
      }
      fetchData();
    } else {
      setDishesData(dishes);
    }
  }, [dishes]);

  if (!dishesData) return <p className="loading-content">Cargando...</p>;
  if (dishesData.length === 0) {
    return (
      <p className="content-not-found">
        No tienes ningún platillo para mostrar :(
      </p>
    );
  }
  return (
    <>
      {dishesData.map((dish) => {
        const { id_platillo, nombre, imagen } = dish;

        return (
          <article className="dish-container" key={id_platillo}>
            <div className="dish-container__card">
              <Link to={`/menu/platillo/${nombre}`}>
                <div className="image-container">
                  <img
                    src={typeof imagen === "string" ? imagen : ""}
                    alt={nombre}
                  />
                </div>
                <h2>{nombre}</h2>
              </Link>
            </div>

            {hideAdminBtns && <AdminBtns dish={dish} />}
          </article>
        );
      })}
    </>
  );
}

export default RenderDish;
