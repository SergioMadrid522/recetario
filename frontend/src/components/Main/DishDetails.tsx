import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { DishesDetails } from "../../data.type";

export default function DishDetails() {
  const { nombre } = useParams<{ nombre: string }>();
  const [dish, setDish] = useState<DishesDetails | null>(null);

  useEffect(() => {
    if (!nombre) return;
    const apiUrl = `${import.meta.env.VITE_GET_DISH_URL}/${nombre}`;
    async function fetchDish() {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Error al cargar el platillo");
        const data = await res.json();
        setDish(data.dish);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDish();
  }, [nombre]);

  if (dish === null) return <p>Platillo no encontrado :(</p>;
  if (!dish) return <p>Cargando platillo...</p>;

  return (
    <div className="dish-details">
      <div className="dish-details__title">
        <h1>{dish.nombre}</h1>
      </div>
      <div className="dish-details__content">
        <div className="dish-details__ingredients">
          <h2>Ingredientes</h2>
          <ul>
            {dish.ingredientes
              .replace(/^"|"$/g, "") // quita comillas al inicio y fin
              .replace(/\\n/g, "\n") // convierte \n en saltos reales
              .split("\n") // separa por líneas
              .map((linea, i) =>
                linea.trim() ? <li key={i}>{linea.trim()}</li> : null
              )}
          </ul>
        </div>
        <div className="dish-details__instructions">
          <h2>Instrucciones de preparación</h2>
          <ol>
            {dish.instrucciones
              .replace(/^"|"$/g, "")
              .replace(/\\n/g, "\n")
              .split("\n")
              .map((linea, index) =>
                linea.trim() ? <li key={index}>{linea.trim()}</li> : null
              )}
          </ol>
        </div>
      </div>
    </div>
  );
}
