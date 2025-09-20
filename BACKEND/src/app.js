const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/auth.routes.js")
const sellerRouter = require('./routes/seller.routes.js');
const productRouter = require("./routes/product.routes.js")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser());

// user api

app.use("/api/auth", authRouter);

// seller api

app.use("/api/seller", sellerRouter);

// product api

app.use("/api/products", productRouter);


module.exports = app;