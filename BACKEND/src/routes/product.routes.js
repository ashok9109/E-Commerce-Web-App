const express = require("express");
const { createProductController, getAllProducts} = require("../controllers/product.controller")

const router = express.Router();

// ========================
// Get all product api
// ========================
router.get("/All-products", getAllProducts);

// ========================
// Create product api
// =========================
router.post("/create", createProductController);

module.exports = router;