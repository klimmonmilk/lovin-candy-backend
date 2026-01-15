import express from "express";
import productRoutes from "./routes/product.routes.js";
import { router as apiRoutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/api/products", productRoutes);