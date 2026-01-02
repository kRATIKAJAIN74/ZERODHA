const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.status(401).json({ success: false });
    }

    req.userId = data.id; // 🔥 store user id
    next(); // 🔥 VERY IMPORTANT
  });
};

module.exports = { authMiddleware };
