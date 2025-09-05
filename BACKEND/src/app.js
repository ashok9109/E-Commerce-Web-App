const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/auth.routes.js")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser());


app.use("/api/auth", authRouter);

module.exports = app;