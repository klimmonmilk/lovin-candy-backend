import { Router } from "express";
import { router as usersRoutes } from "./users.routes.js";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";

export const router = Router();

router.use("/users", usersRoutes);

router.use("/products", productRoutes);

router.use("/auth", authRoutes);