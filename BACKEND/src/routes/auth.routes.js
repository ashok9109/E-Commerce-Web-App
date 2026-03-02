const express = require("express");
const authController = require("../controllers/auth.controller.js");
const { authMiddleware } = require("../middlewares/auth.middleware.js")

const router = express.Router();

// =========================
// login user fetching
// ==========================
router.get("/me", authMiddleware, (req, res) => {
    return res.status(200).json({ message: "user is logged in", user: req.user })
})

// ================
// Register Api
// ================
router.post("/user/signup", authController.signupUser);

// ================
// Login Api
// ================
router.post("/user/login", authController.signinUser);

// ================
// Logout Api
// ================
router.get("/user/logout", authController.logoutUser);

module.exports = router;