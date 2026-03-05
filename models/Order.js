const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      fullName: String,
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
    paymentMethod: String,
    itemsPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: Date,
    trackingStatus: {
  type: String,
  enum: ["Processing", "Shipped", "Out for Delivery", "Delivered"],
  default: "Processing"
}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);