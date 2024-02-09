const dragonRoute = require("express").Router();
const dragonController = require("../controller/dragonController");

dragonRoute.get("/", dragonController.getAllDragon);
dragonRoute.get("/find/:id", dragonController.findDragon);
dragonRoute.get("/rank", dragonController.rankDragon);
dragonRoute.post("/add", dragonController.createOneDragon);
dragonRoute.put("/edit/:id", dragonController.EditOneDragon);
dragonRoute.delete("/delete/:id", dragonController.DeleteOneDragon);

module.exports = dragonRoute;
