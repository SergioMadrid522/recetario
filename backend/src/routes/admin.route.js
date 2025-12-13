import express from "express";
import { connection } from "../connection.js";
import { AdminValidation } from "../validation/AdminValidation.js";

const router = express.Router();

const getDishById = async (id) => {
  try {
    const rows = await connection.query(
      "SELECT * FROM platillo WHERE id_platillo = $1",
      [id]
    );
    return rows.rows[0];
  } catch (error) {
    console.error(error);
  }
};
/* -------------------------- POST: Add new Dishes -------------------------- */
router.post("/addDish", async (req, res) => {
  const errors = AdminValidation(req.body);
  const { nombre, ingredientes, instrucciones, imagen, id_categoria } =
    req.body;

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const existing = await connection.query(
      "SELECT * FROM platillo WHERE nombre = $1",
      [nombre]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({
        errors: ["No se puede agregar un producto con el mismo nombre"],
      });
    }

    await connection.query(
      "INSERT INTO platillo (nombre, ingredientes, instrucciones, imagen, id_categoria) VALUES ($1, $2, $3, $4, $5)",
      [nombre, ingredientes, instrucciones, imagen || null, id_categoria]
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
    const dish = await getDishById(id_platillo);
    if (!dish) {
      return res
        .status(400)
        .json({ message: "El platillo que intentas eliminar no existe" });
    }
    await connection.query("DELETE FROM platillo WHERE id_platillo = $1", [
      id_platillo,
    ]);

    res.status(200).json({ message: "Platillo borrado satisfactoriamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});
/* -------------------------- PUT: Modify Dish -------------------------- */
router.put("/modifyDish", async (req, res) => {
  const {
    id_platillo,
    nombre,
    ingredientes,
    instrucciones,
    imagen,
    id_categoria,
  } = req.body;

  try {
    // 1. Verificación rápida (opcional, pero buena práctica)
    if (!id_platillo) {
      return res.status(400).json({ error: "Falta el ID del platillo" });
    }

    // 2. Update optimizado con RETURNING *
    // Esto hace el UPDATE y devuelve el resultado en una sola llamada a la DB
    const result = await connection.query(
      `UPDATE platillo 
       SET nombre = $1, 
           ingredientes = $2, 
           instrucciones = $3, 
           imagen = $4, 
           id_categoria = $5 
       WHERE id_platillo = $6 
       RETURNING *`,
      [nombre, ingredientes, instrucciones, imagen, id_categoria, id_platillo]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: `No se encuentra el platillo con id ${id_platillo}` });
    }

    res.status(200).json({
      message: "Platillo guardado",
      dishData: result.rows[0],
    });
  } catch (error) {
    console.error("Error en modifyDishDetails:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
