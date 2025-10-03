import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
/* Types */
import type { Dish } from "./type.ts";
/* Components */
import AdminBtns from "./AdminBtns";
/* Data */
import { dishImages } from "./data.ts";

type RenderDishProps = {
  dishes?: Dish[];
  onSelect?: (dishId: number) => void;
};

function RenderDish({ dishes }: RenderDishProps) {
  const location = useLocation();
  const hideAdminBtns = location.pathname === "/admin/home";
  const [data, setData] = useState<Dish[] | null>(dishes || null);
  const apiUrl = "http://localhost:3000/getDishes";

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

  if (!data) return <p>Cargando...</p>;
  if (data.length === 0)
    return <p>No tienes ningún platillo para mostrar :(</p>;

  return (
    <>
      {data.map((dish, idx) => {
        const image = dishImages[idx % dishImages.length];
        return (
          <article className="dish-container" key={dish.id_platillo || idx}>
            <div className="dish-container__card">
              <Link
                to={`/menu/platillo/${dish.nombre}`}
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={image.img} alt={dish.nombre} />
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
