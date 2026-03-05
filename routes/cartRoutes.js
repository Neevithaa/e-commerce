const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

/**
 * @route   POST /api/cart
 * @desc    Add product to cart
 * @access  Private
 */
router.post("/", protect, addToCart);

/**
 * @route   GET /api/cart
 * @desc    Get logged-in user's cart
 * @access  Private
 */
router.get("/", protect, getCart);

/**
 * @route   DELETE /api/cart/:id
 * @desc    Remove item from cart
 * @access  Private
 */
router.delete("/:id", protect, removeFromCart);

module.exports = router;