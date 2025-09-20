const express = require("express");
const sellerController = require("../controllers/seller.controller");


const router = express.Router();


router.post("/signup", sellerController.sellerSignup);

module.exports = router;