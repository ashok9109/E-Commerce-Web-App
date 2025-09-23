const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        amount:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            required:true,
            enum:["INR","USD"]
        }
    },
    image:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true,
        default:0
    },
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;