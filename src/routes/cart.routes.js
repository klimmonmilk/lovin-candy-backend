import express from "express";
import { addItemToCart } from "../modules/cart/cart.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/items", auth, addItemToCart);

export default router;
