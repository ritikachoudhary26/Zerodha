const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token" });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);

    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    req.user = user;  // attach user to request
    next();           // VERY IMPORTANT
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};
