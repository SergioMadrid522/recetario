import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { dishDetails } from "./type.ts";

function DishDetails() {
  const { nombre } = useParams<{ nombre: string }>();
  const [dish, setDish] = useState<dishDetails | null>(null);

  useEffect(() => {
    if (!nombre) return;
    const apiUrl = `http://localhost:3000/getDish/${nombre}`;
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
      <div className="dish-details__ingredients">
        <h2>Ingredientes</h2>
        <pre>
          {dish.ingredientes.replace(/^"|"$/g, "").replace(/\\n/g, "\n")}
        </pre>
      </div>
      <div className="dish-details__instructions">
        <h2>Instruciones de preparación</h2>
        <pre>
          {dish.instrucciones.replace(/^"|"$/g, "").replace(/\\n/g, "\n")}
        </pre>
      </div>
    </div>
  );
}
export default DishDetails;
