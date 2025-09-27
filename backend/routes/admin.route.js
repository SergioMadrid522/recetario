import express from "express";
import { connection } from "../connection.js";
import { AdminValidation } from "../validation/AdminValidation.js";

const router = express.Router();

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
    return res.status(200).json({
      message: "El platillo se guardo exitosamente",
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
