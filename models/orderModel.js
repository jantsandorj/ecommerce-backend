const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    orderNumber: Number,
    shipped: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    quantity: Number,
    totalPrice: Number,
  },
  { collection: "orderDetail", timestamps: true }
);

const orderModel = mongoose.model("orderModel", orderSchema);

module.exports = orderModel;
