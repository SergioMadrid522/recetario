import express from "express";
import { connection } from "../connection.js";
import { AdminValidation } from "../validation/AdminValidation.js";

const router = express.Router();

const getDishById = async (id) => {
  const [rows] = await connection.query(
    "SELECT * FROM platillo WHERE id_platillo = ?",
    [id]
  );
  return rows[0];
};
/* -------------------------- POST: Add new Dishes -------------------------- */
router.post("/agregarPlatillo", async (req, res) => {
  const errors = AdminValidation(req.body);
  const {
    nombre,
    ingredientes,
    instrucciones,
    /* imagen, */
    id_categoria,
  } = req.body;

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const [existing] = await connection.query(
      "SELECT * FROM platillo WHERE nombre = ?",
      [nombre]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        errors: ["No se puede agregar un producto con el mismo nombre"],
      });
    }

    await connection.query(
      "INSERT INTO platillo (nombre, ingredientes, instrucciones, id_categoria) VALUES (?, ?, ?, ?)",
      [
        nombre,
        JSON.stringify(ingredientes),
        JSON.stringify(instrucciones),
        id_categoria,
      ]
    );
    return res.status(201).json({
      message: "El platillo se guardo exitosamente",
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});
/* -------------------------- DELETE: Delete Dish -------------------------- */
router.delete("/deleteDish", async (req, res) => {
  const { id_platillo } = req.body;

  try {
    if (getDishById.length === 0) {
      return res.status(400).json({ error: "No se encuentra el platillo" });
    }

    await connection.query("DELETE FROM platillo WHERE id_platillo = ?", [
      id_platillo,
    ]);

    res.status(200).json({ message: "Platillo borrado satisfactoriamente" });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

/* -------------------------- PUT: Modify Dish -------------------------- */

router.put("/modifyDishDetails", async (req, res) => {
  const { id_platillo, nombre, ingredientes, instrucciones, id_categoria } =
    req.body;

  try {
    //Verify the dish exists
    const [existing] = await connection.query(
      "SELECT * FROM platillo WHERE id_platillo = ?",
      [id_platillo]
    );

    if (existing.length === 0) {
      return res
        .status(400)
        .json({ error: `No se encuentra el platillo con id ${id_platillo}` });
    }

    await connection.query(
      "UPDATE platillo SET nombre = ?, ingredientes = ?, instrucciones = ?, id_categoria = ? WHERE id_platillo = ?",
      [
        nombre,
        JSON.stringify(ingredientes),
        JSON.stringify(instrucciones),
        id_categoria,
        id_platillo,
      ]
    );

    //Send the updatedDish info to the user
    const [updatedDish] = await connection.query(
      "SELECT * FROM platillo WHERE id_platillo = ?",
      [id_platillo]
    );

    res.status(200).json({
      message: "Platillo guardado",
      dishData: updatedDish[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
