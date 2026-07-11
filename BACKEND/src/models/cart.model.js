const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },

    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            required: true,
            unique: true
        },

        quantity: {
            type: Number,
            required: true,
            default: 1,
            min: 1
        }
    }]


}, { timestamps: true })

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;