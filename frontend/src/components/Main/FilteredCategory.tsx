import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderDish from "./content/RenderDish.tsx";
import type { Dish } from "../../data.type.ts";
import { options } from "../../data.ts";

function FilteredCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryName =
    options.find((cat) => cat.id === Number(categoryId))?.name ||
    "Categoría desconocida";

  useEffect(() => {
    async function fetchDishes() {
      const apiUrl = import.meta.env.VITE_GET_ALL_DISHES_URL;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const filtered = data.dishes.filter(
          (dish: Dish) => dish.id_categoria === Number(categoryId)
        );
        setFilteredDishes(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDishes();
  }, [categoryId]);

  if (loading) return <p>Cargando...</p>;

  return (
    <main>
      <h2 className="menu-title" id="inicio">
        {categoryName}
      </h2>
      <div className="dish-wrap">
        <RenderDish dishes={filteredDishes} />
      </div>
    </main>
  );
}

export default FilteredCategory;
