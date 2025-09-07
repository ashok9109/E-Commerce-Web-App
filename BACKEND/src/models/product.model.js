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
            eunm:["INR","USD"]
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
    }
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;