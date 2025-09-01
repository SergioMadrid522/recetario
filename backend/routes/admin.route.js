import express from 'express';
import { connection } from '../connection.js';
import { AdminValidation } from '../validation/AdminValidation.js';

const router = express.Router();

router.post('/agregarPlatillo', async (req, res) => {
    const errors = AdminValidation(req.body);
    const { nombre, ingredientes, instrucciones, id_categoria } = req.body;
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    try {
        await connection.query(
            "INSERT INTO platillo (nombre, ingredientes, instrucciones, id_categoria) VALUES (?, ?, ?, ?)",
            [nombre, ingredientes, instrucciones, id_categoria]
        );
        return res.status(200).json({
            message: "El platillo se guardo exitosamente"
        })
    } catch(error) {
        console.error("Error", error);
        res.status(500).json({message: error});    
    }
});

export default router;