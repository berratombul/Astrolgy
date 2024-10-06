const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/uploadCoffee/:id", controller.coffeeController.uploadCoffe);
router.get("/getCoffeeByUser/:userId", controller.coffeeController.getCoffeeByUser);
router.get("/getCoffeeById/:id", controller.coffeeController.getCoffeeById);
router.get("/getContinueCoffee/:userId", controller.coffeeController.getContinueCoffee);
router.get("/getCanceledCoffee/:userId", controller.coffeeController.getCanceledCoffee);
router.get("/getFinishedCoffee/:userId", controller.coffeeController.getFinishedCoffee);
router.get("/listAll", controller.coffeeController.listAll);
router.put("/updateCoffeeById/:id", controller.coffeeController.updateCoffeeById);

module.exports = {coffee:router};