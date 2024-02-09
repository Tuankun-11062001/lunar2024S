const userRoute = require("express").Router();
const userController = require("../controller/userController");

userRoute.post("/login", userController.login);

module.exports = userRoute;
