const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    category: String,
  },
  { collection: "category" }
);

const categoryModel = mongoose.model("categoryModel", categorySchema);
module.exports = categoryModel;
