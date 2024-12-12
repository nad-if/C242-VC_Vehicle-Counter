const express = require("express");
const router = express.Router();
const { authenticate, checkRole } = require("../middlewares/authMiddleware");
const {
  getAllUsers,
  getUserProfile,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", authenticate, getAllUsers);
router.get("/:id", authenticate, getUserProfile);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, checkRole(["admin"]), deleteUser);

module.exports = router;
