const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { addToCartController } = require("../controllers/cart.controller");


const router = express.Router();

// ==========================
// Add to cart api
// ==========================
router.post('/add/to/cart', authMiddleware, addToCartController);





module.exports = router;