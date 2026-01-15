import { Product } from "./product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      images,
    } = req.body;

    // validation
    if (!name || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "name and price are required",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category: category ?? "GENERAL", // ⭐ default ทาง logic
      images,
    });

    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
