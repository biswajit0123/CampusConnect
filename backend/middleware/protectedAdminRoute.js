const jwt = require('jsonwebtoken');
const Admin = require('../model/Admin.model.js')

const protectedAdminRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    
    // No token found
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    // Find admin by ID
    const admin = await Admin.findById(decoded.id);
  console.log(admin)
  next();

  } catch (err) {
    console.error("Admin auth error:", err.message);
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
};

module.exports = protectedAdminRoute;
