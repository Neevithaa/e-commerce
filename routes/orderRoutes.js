const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  addOrderItems,
  getMyOrders,
  createRazorpayOrder,
  getOrderById
} = require("../controllers/orderController");

router.post("/", protect, addOrderItems);
router.get("/myorders", protect, getMyOrders);
router.post("/razorpay", protect, createRazorpayOrder);
router.get("/:id", protect, getOrderById);

module.exports = router;