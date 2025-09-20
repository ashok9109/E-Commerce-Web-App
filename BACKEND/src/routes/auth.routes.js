const express = require("express");
const authController = require("../controllers/auth.controller.js");
const { authuser } = require("../middlewares/auth.middleware.jsx")

const router = express.Router();

router.get("/me", authuser, (req, res) => {
    return res.status(200).json({ message: "user is logged in", user: req.user })
})

// register, login and logout routes

router.post("/user/signup", authController.signupUser);
router.post("/user/login", authController.signinUser);
router.get("/user/logout", authController.logoutUser)

module.exports = router;