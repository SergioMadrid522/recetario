import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderDish from "./RenderDish.tsx";

import type { Dish } from "./type.ts";
import { options } from "../pages/admin/components/data.ts";

function FilteredCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryName =
    options.find((cat) => cat.id === Number(categoryId))?.name ||
    "Categoría desconocida";

  useEffect(() => {
    async function fetchDishes() {
      try {
        const res = await fetch("http://192.168.0.10:3001/api/getDishes");
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
