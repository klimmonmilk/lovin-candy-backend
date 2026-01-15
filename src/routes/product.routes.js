import { Router } from "express";
import { createProduct } from "../modules/product/product.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// ไม่บังคับ auth 
router.post("/", createProduct);

// บังคับ auth:
// router.post("/", auth, createProduct);

export default router;

