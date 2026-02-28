const productModel = require("../models/product.model");


// ===============================
// Create product controller 
// ===============================

const createProductController = async (req, res)=>{
    try {

        // const {}
        
    } catch (error) {
        console.log("error while creating products", error);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error
        })
    }
};









// =======================================
// fetching all product Controller
// =======================================
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