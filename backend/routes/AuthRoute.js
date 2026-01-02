const { Signup, Login } = require("../controllers/AuthController");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // localhost
  });

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
});
router.post("/", authMiddleware);
module.exports = router;
