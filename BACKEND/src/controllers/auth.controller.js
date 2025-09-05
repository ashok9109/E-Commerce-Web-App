const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

// register controller

async function registerUser(req, res) {
    try {
        const { fullName: { firstName, lastName }, email, password, } = req.body;
    
        const userAlreadyExists = await userModel.findOne({email})
    
        if (userAlreadyExists) {
            return res.status(422).json({
                message: "email is already exist"
            })
        }
    
        const hash = await bcrypt.hash(password, 10)
    
        const user = await userModel.create({
            email,
            fullName: {
                firstName,
                lastName
            },
            password: hash
        });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
        res.cookie("token", token);
    
        res.status(201).json({
            message: "user registed successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName
            }
        })
        
    } catch (error) {
        console.log(error)
    }

}

// login controller

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        console.log("backend dta recive ", email, password)

        const user = await userModel.findOne({email});

        if (!user) {
            return res.status(400).json9({
                message: "Invalid credentials"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.cookie("token", token)

        res.status(200).json({
            message: " user loged successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName
            }
        })

    } catch (error) {
        console.log(error)
    }

}

module.exports = { registerUser, loginUser };