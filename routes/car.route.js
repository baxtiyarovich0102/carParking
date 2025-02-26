const express = require("express")
const carController = require("../controller/car.controller")
let router = express.Router()

router.get("/cars", carController.getCars)
router.get("/cars/:id", carController.getCarById)
router.post("/cars",carController.addCar)


module.exports = router