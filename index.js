const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("server is running" + port));

mongoose
  .connect(process.env.DB_STRING)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const products = require("./routes/product.route");
const category = require("./routes/category.route");
const userdata = require("./routes/userData.route");
const order = require("./routes/order.route");

app.use("/api", products);
app.use("/api", userdata);
app.use("/api", category);
app.use("/api", order);
