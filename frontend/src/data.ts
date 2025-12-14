import type { Option } from "./data.type.ts";

export const GLOBAL = {
  hamburgerSvg:
    "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5",

  searchIconSvg:
    "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",

  closeIconSvg:
    "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z",
};

export const sideMenuOptions: Array<Option> = [
  { link: "admin/home", optionName: "Home" },
  { link: "admin/subir-platillo", optionName: "Subir Platillo" },
];

export const categories = [
  { link: "#", name: "Bebida" },
  { link: "#", name: "Comida mexicana" },
  { link: "#", name: "Comida rápida" },
  { link: "#", name: "Complementos" },
  { link: "#", name: "Platillo principal" },
  { link: "#", name: "Postre" },
  { link: "#", name: "Reposteria" },
  { link: "#", name: "Salsas" },
  { link: "#", name: "Tortillas" },
];

export const options = [
  { id: 1, name: "Bebida" },
  { id: 2, name: "Comida mexicana" },
  { id: 3, name: "Comida rápida" },
  { id: 4, name: "Complementos" },
  { id: 5, name: "Platillo principal" },
  { id: 6, name: "Postre" },
  { id: 7, name: "Reposteria" },
  { id: 8, name: "Salsas" },
  { id: 9, name: "Tortillas" },
];
