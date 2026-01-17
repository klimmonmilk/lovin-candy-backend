import { Cart } from "./cart.model.js";
import { Product } from "../product/product.model.js";
import { POPULARITY_SCORE } from "../../constants/popularity_score.js";

export const addItemToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const userId = req.user?.id || null; // login → มีค่า / guest → null

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 🔑 cart ของ user (หรือ guest = user:null)
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [],
        totalPrice: 0,
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
  existingItem.quantity += quantity;
} else {
  cart.items.push({
    product: productId,
    quantity,
    price: product.price,
  });

  // 🔥 update popularity เฉพาะตอน add ใหม่
  await Product.findByIdAndUpdate(productId, {
    $inc: { popularityScore: POPULARITY_SCORE.ADD_TO_CART },
  });
}

    cart.totalPrice = cart.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    await cart.save();

    return res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
