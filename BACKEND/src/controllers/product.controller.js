const productModel = require("../models/product.model");

async function getAllProducts(req,res) {
    try {
        const products = await productModel.find();
    
        res.status(200).json({
            message:"product fetch successfully",
            products
        })
        
    } catch (error) {
        console.log("error in fetching products", error)
    }
}

module.exports = {getAllProducts}