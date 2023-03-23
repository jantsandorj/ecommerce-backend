const { Router } = require("express");
const userdata = require("../controllers/userdata.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/user", userdata.getall);
route.post("/user", userdata.register);
route.post("/login", userdata.login);
route.post("/userall", auth, userdata.getAll);
route.post("/user/:id", auth, userdata.getAll);
route.post("/users", auth, userdata.getAll);
route.post("/userall", auth, userdata.getAll);

module.exports = route;
