const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = 9000;
const app = express();

app.use(cors());
app.use(express.json());

const menuRouter = require("./routes/menu.route");
const categoryRouter = require("./routes/category.route");

app.listen(port, () => console.log("server is running"));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome Rest Api" });
});

app.use("/api", menuRouter);
app.use("/api", categoryRouter);