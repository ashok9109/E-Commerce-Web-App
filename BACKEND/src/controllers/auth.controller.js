const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

//user register controller

async function signupUser(req, res) {
    try {
        const { fullName: { firstName, lastName }, email, password, role } = req.body;

        const userAlreadyExists = await userModel.findOne({ email })

        if (userAlreadyExists) {
            return res.status(422).json({
                message: "Email is already exist"
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            email,
            fullName: {
                firstName,
                lastName
            },
            password: hash,
            role
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: "none"
        });

        res.status(201).json({
            message: "user registed successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role
            }
        })

    } catch (error) {
        console.log(error)
    }

}

//user signin controller

async function signinUser(req, res) {
    try {
        const { email, password, role } = req.body;

        const user = await userModel.findOne({ email });

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

        if (role !== user.role) {
            return res.status(400).json({
                message: "Role is Incorrect"
            })
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: false
        })

        res.status(200).json({
            message: " user logged successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,

            }
        })

    } catch (error) {
        console.log(error);
    }

};


// logout controller

async function logoutUser(req, res) {

    try {
        const token = req?.cookies?.token;

        // console.log("token ----", token)

        if (!token) {
            return res.status(404).json({
                message: "token not found"
            })
        }


        res.clearCookie("token");

        return res.status(200).json({
            message: "user is logout"
        })

    } catch (error) {
        console("error in logout ", error);
        return res.status(400).json({
            message: "error in logout"
        })
    }
};



module.exports = { signupUser, signinUser, logoutUser };