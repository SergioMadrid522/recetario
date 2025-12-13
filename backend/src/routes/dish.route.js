import express from "express";
import { connection } from "../connection.js";

const router = express.Router();

/* -------------------------- GET: Obtain the Dish information -------------------------- */
router.get("/getAll", async (req, res) => {
  try {
    const rows = await connection.query("SELECT * FROM platillo");
    return res.status(200).json({ dishes: rows.rows });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: error.message });
  }
});

/* -------------------------- GET: Obtain the Dish info by name -------------------------- */
router.get("/get/:nombre", async (req, res) => {
  const nombre = req.params.nombre;

  try {
    const rows = await connection.query(
      "SELECT * FROM platillo WHERE nombre = $1",
      [nombre]
    );

    if (rows.rows.length === 0) {
      return res.status(404).json({ message: "No se encontró el platillo" });
    }

    const dish = rows.rows[0];
    res.status(200).json({ dish });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
