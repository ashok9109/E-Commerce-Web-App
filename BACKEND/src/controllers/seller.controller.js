const sellerModel = require("../models/seller.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// seller signup controller

async function sellerSignup(req, res) {

    try {
        const { fullName: { firstName, lastName }, email, password, role } = req.body;

        const sellerAlreadyExists = await sellerModel.findOne({ email });

        if (sellerAlreadyExists) {
            return res.status(422).json({
                message: "Eamil is Already Exists"
            })
        }

        const hash = await bcrypt.hash(password, 10);

        const seller = await sellerModel.create({
            fullName: {
                firstName,
                lastName
            },
            email,
            password: hash,
            role
        });

        const token = jwt.sign({ id: seller._id }, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            samesite: "none",
            secure: "none"
        });

        res.status(201).json({
            message: "seller logged successfully",
            seller: {
                id: seller.id,
                fullName: seller.fullName,
                eamil: seller.email,
                role: seller.role
            }
        })

    } catch (error) {
        console.log(error)

    }

};

module.exports = { sellerSignup }