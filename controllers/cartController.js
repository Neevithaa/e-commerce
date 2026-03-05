const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { product, qty } = req.body;

  const item = await Cart.create({
    user: req.user._id,
    product,
    qty
  });

  res.status(201).json(item);
};

exports.getCart = async (req, res) => {
  const cartItems = await Cart.find({ user: req.user._id }).populate("product");
  res.json(cartItems);
};

exports.removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
};