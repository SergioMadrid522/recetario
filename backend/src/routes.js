import express from "express";
// Routes
import adminRoutes from "./routes/admin.route.js";
import dishRoutes from "./routes/dish.route.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/dish", dishRoutes);

export default router;
