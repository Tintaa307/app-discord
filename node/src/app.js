const express = require("express")
const path = require("path")
const session = require("express-session")

const app = express()

// Setting up the view engine

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Middlewares

// Routes for the app
app.use("/", require("./routes/index.routes"))

app.use("/auth", require("./routes/auth.routes"))

app.use("/dashboard", require("./routes/dash.routes"))

// Global variables

module.exports = app
