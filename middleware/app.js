const express = require("express")
const ejs = require("ejs")

const app = express()
app.use(express.json())

app.set("engine view", "ejs")
app.set("views", "./public/views")

let carRouter = require("../routes/car.route")
app.use(carRouter)

module.exports = {app}