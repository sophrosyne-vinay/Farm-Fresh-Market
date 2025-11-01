import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is missing",
      });
    }

    // Check if the token starts with "Bearer " and remove it if present
    const tokenValue = token.startsWith("Bearer ") ? token.slice(7) : token;

    const decode = JWT.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

// Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.role !== 0) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access: Admin rights required",
      });
    } else {
      next();
    }
  } catch (error) {
    console.error("Admin middleware error:", error);
    res.status(500).json({
      success: false,
      message: "Error in admin middleware",
      error: error.message,
    });
  }
};