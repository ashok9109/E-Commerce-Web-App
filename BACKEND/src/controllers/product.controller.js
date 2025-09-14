const productModel = require("../models/product.model");

async function getAllProducts(req,res) {
    const products = await productModel.find().populate("seller");

    res.status(200).json({
        message:"product fetch successfully",
        products
    })
}

module.exports = {getAllProducts}