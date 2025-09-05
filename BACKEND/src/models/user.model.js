const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

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
    
    // role: {
    //     type: String,
    //     enum: ["user", "seller"],
    //     default: "user"
    // }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;