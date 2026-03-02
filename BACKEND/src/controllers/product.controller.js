const productModel = require("../models/product.model");


// ===============================
// Create product controller 
// ===============================

const createProductController = async (req, res) => {
    try {

        const { title, description, price: { amount, currency }, image, stock, brand } = req.body;

        const newProduct = await productModel.create({
            title,
            description,
            price: { amount, currency },
            image,
            stock,
            brand
        });

        return res.status(200).json({
            success: true,
            message: "Product create successfully",
            newProduct
        });

    } catch (error) {
        console.log("error while creating products", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
};

// =======================================
// fetching all product Controller
// =======================================
async function getAllProducts(req, res) {
    try {
        const products = await productModel.find();

        res.status(200).json({
            message: "product fetch successfully",
            products
        })

    } catch (error) {
        console.log("error in fetching products", error)
    }
}

module.exports = { getAllProducts, createProductController }