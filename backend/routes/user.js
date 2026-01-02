const express = require("express");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const User = require("../model/UserModel");

const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("username email");
  res.json({ success: true, user });
});

module.exports = router;
