const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    password: String,
    email: { type: String, unique: true },
    favProduct: [String],
    mostVisitedProduct: [String],
  },
  { collection: "userData", timestamps: true }
);

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
