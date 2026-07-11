const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/auth.routes.js")
const productRouter = require("./routes/product.routes.js")
const cors = require("cors");
const cartRouter = require('./routes/cart.routes.js');
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser());


// =================
// User api
// =================
app.use("/api/auth", authRouter);

// ===============
// Product api
// ================
app.use("/api/products", productRouter);

// =====================
// add to cat api
// ====================
app.use('/api/atc', cartRouter)


module.exports = app;