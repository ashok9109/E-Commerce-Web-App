const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");



const addToCartController = async (req, res) => {

    try {
        const userId = req.user._id;

        const { productId, quantity } = req.body;

        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "product not found"
            })
        }

        const cart = await cartModel.findOne({ user: userId });

        if (!cart) {

            cart = await cartModel.create({

                user: userId,
                items: [{
                    product: productId,
                    quantity: quantity
                }]
            })

        } else {
            const exisitingProduct = cart.items.find(
                (item) => item.product.toString() === productId
            )

            if (exisitingProduct) {
                const newQuantity = exisitingProduct.quantity + quantity;

                exisitingProduct.quantity = newQuantity

            } else {
                cart.items.push({
                    product: productId,
                    quantity: quantity
                })
            }

            await cart.save();
        }

        return res.status(200).json({
            message: "Add to cart Succssfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error:error
        })
    }
}

module.exports = { addToCartController };



