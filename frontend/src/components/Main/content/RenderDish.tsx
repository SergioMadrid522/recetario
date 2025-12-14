import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminBtns from "./AdminBtns.tsx";
import type { Dish, RenderDishProps } from "../../../data.type.ts";

export default function RenderDish({ dishes }: RenderDishProps) {
  const apiUrl = import.meta.env.VITE_GET_ALL_DISHES_URL;
  const location = useLocation();
  const hideAdminBtns = location.pathname === "/admin/home";
  const [dishesData, setDishesData] = useState<Dish[] | null>(dishes || null);
  console.log(apiUrl);
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
          console.error("Error:", error);
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
