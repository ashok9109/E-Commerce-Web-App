const express = require("express");
const {getAllProducts, createProductController} = require("../controllers/product.controller")

const router = express.Router();

// ========================
// Get all product api
// ========================
router.get("/", getAllProducts);

// ========================
// Create product api
// =========================
router.post("/create", createProductController);

module.exports = router;