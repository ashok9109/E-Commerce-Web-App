const express = require("express");
const { createProductController, getAllProducts, fetchingsSinglePorduct} = require("../controllers/product.controller")

const router = express.Router();

// ========================
// Get all product api
// ========================
router.get("/All-products", getAllProducts);

// ========================
// Create product api
// =========================
router.post("/create", createProductController);

// =============================
// fetching singel product
// ==============================
router.get("/single/product/:id", fetchingsSinglePorduct);


module.exports = router;