const express = require("express")
const ejs = require("ejs")

const app = express()
app.use(express.json())

app.set("engine view", "ejs")
app.set("views", "./public/views")



module.exports = {app}