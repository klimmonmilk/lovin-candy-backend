import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProductPopularity,
} from "../modules/product/product.controller.js";

const router = Router();


router.get("/", getProducts);
router.get("/:id", getProductById);
// ไม่บังคับ auth
router.post("/", createProduct);
// บังคับ auth:
// router.post("/", auth, createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id/popular", updateProductPopularity);

export default router;

