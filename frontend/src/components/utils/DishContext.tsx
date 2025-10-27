import { createContext, useContext, useEffect, useState } from "react";
import type { Dish } from "../Main/type.ts";

type DishesContextType = {
  dishes: Dish[];
};

const DishesContext = createContext<DishesContextType>({ dishes: [] });

export function DishesProvider({ children }: { children: React.ReactNode }) {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://192.168.0.10:3000/getDishes");
        if (!res.ok) {
          throw new Error(
            `Error en la petición: ${res.status} ${res.statusText}`
          );
        }
        const result = await res.json();
        setDishes(result.dishes || []);
      } catch (error) {
        console.error("Error al obtener los platillos del API:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <DishesContext.Provider value={{ dishes }}>
      {children}
    </DishesContext.Provider>
  );
}

export function useDishes() {
  return useContext(DishesContext);
}
