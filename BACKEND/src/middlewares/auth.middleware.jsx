
const jtw = require("jsonwebtoken");
const userModel = require("../models/user.model");


const authuser = async (req, res, next) => {
    let token = req.cookies.token;

    try {
        if (!token) {
            return res.status(401).json({
                message: "Token not found "
            });
        };

        let decode = jtw.verify(token, process.env.JWT_SECRET);

        let user = await userModel.findById(decode.id);

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        };

        req.user = user;
        next();

    } catch (error) {
        console.log("error is auth middleware", error.message);
    }

}

module.exports = { authuser };