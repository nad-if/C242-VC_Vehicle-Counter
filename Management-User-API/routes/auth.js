const express = require("express");
const {
  register,
  verifyOTP,
  login,
  logout,
} = require("../controllers/authController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.post("/logout", authenticate, logout);

module.exports = router;
