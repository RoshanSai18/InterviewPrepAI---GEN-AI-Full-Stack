// Initiate server in app.js
// Routes and middlewares handled in app.js
const express = require('express')


app = express()

app.use(express.json())

/* require all the routes here */
const authRouter = require("./routes/auth.routes")

/* using all the routes here */
app.use("/api/auth", authRouter)


module.exports = app;