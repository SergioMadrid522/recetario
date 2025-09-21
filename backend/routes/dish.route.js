import express from 'express';
import { connection } from '../connection.js';
import { dishValidation } from '../validation/dishValidation.js';

const router  = express.Router();

router.get("/getDishes", async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM platillo');
        
        return res.status(200).json({dishes: rows});
    } catch (error) {
        console.error("error", error);
        return res.status(500).json({message: error.message})
    }
});

router.get("/getDish/:id", async (req, res) => {
    const errors = dishValidation(req.params.id);
    const id_platillo = req.params.id;
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    if (!dish) {
       return res.status(404).json({message: 'not found'});
    }

    try {
        const [rows] = await connection.query(
            'SELECT * FROM platillo WHERE id_platillo = ?', [id_platillo]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "No se encontró el platillo" });
        }

        const dish = rows[0];
        res.status(200).json({
            dishInfo: dish,
            dish: dish
        });
    } catch(error) {
        console.error("error", error);
        res.status(500).json({message: error.message})
    }
})
export default router;