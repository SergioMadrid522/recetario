import type { Dish } from "./type.ts";

import hamburgesa from "../../assets/pictures/hamburgesa.webp";
import horchata from "../../assets/pictures/Horchata.webp";
import tacosPastor from "../../assets/pictures/Tacos-al-pastor.webp";
import tortillasMaiz from "../../assets/pictures/tortillas-de-maiz.webp";
import flan from "../../assets/pictures/flan.webp";

export const dishes:Dish[] = [
  {
    nombre: "Agua de Horchata",
    description: "Refrescante bebida mexicana hecha a base de arroz, canela y leche.",
    link: "#",
    img: horchata,
    category: "Bebida",
  },
  {
    nombre: "Tacos al Pastor",
    description: "Tortillas de maíz rellenas con carne de cerdo marinada en achiote y piña.",
    link: "#",
    img: tacosPastor,
    category: "Platos fuertes",
  },
  {
    nombre: "Tortillas de Maíz",
    description: "Base de la cocina mexicana, hechas con masa de maíz nixtamalizado.",
    link: "#",
    img: tortillasMaiz,
    category: "Tortillas",
  },
    {
    nombre: "Flan",
    description: "Refrescante bebida mexicana hecha a base de arroz, canela y leche.",
    link: "#",
    img: flan,
    category: "Postre"
  },
  {
    nombre: "Hamburgesa",
    description: "Base de la cocina mexicana, hechas con masa de maíz nixtamalizado.",
    link: "#",
    img: hamburgesa,
    category: "Comida rápida",

  },

];
