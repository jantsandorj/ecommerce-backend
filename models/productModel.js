const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: String,
    categoryID: Number,
    price: Number,
    thumbImg: String,
    images: [String],
    discountPercent: Number,
    quantity: Number,
    desc: String,
    createUser: String,
  },
  { collection: "productData", timestamps: true }
);

const productModel = mongoose.model("productModel", productSchema);
module.exports = productModel;
