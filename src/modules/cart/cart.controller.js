import Cart from "./cart.model.js";
import CartItem from "../cart_item/cart_item.model.js";
import Product from "../product/product.model.js";

export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.id; // มาจาก auth middleware
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ message: "Missing data" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ userId, status: "active" });
    if (!cart) {
      cart = await Cart.create({ userId, status: "active" });
    }

    const cartItem = await CartItem.create({
      cartId: cart._id,
      productId,
      quantity,
      price: product.price,
    });

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
