const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "seller", "admin"],
        default: "user"
    }
});

const sellerModel = mongoose.model("seller", sellerSchema);

module.exports = sellerModel