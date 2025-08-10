// controllers/admin.controller.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require('../model/Admin.model.js')
const Post = require('../model/Post.model.js')
const User = require('../model/User.model.js')
const Comment = require('../model/Comment.module.js')
const Campus = require('../model/Campus.model.js')

module.exports = {
  // Create Admin
  async adminCreate(req, res) {
    try {
      const { fullName, email, password } = req.body;

      if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: "Admin already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const admin = await Admin.create({
        fullName,
        email,
        password: hashedPassword,
        role: "admin",
      });

      res.status(201).json({
        message: "Admin created successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  // Login Admin
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: admin._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
        res.cookie('token', token, {
        httpOnly: true,      // Prevents JS from accessing the cookie
        secure: true,        // Sends cookie only over HTTPS
        sameSite: 'strict',  // Helps prevent CSRF
        maxAge:  24 * 60 * 60 * 1000 // 1 week
        });

      res.status(200).json({
        message: "Login successful", admin
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
async logout(req, res) {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
},

async dashboard(req, res){

  try {
    const posts = await Post.find({}).populate('owner');
    const comments = await Comment.find({});
    const users = await User.find({});

    res.status(200).json({users, posts, comments})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"INternal server error"})
  }
},

async addCampus(req, res){
  try {
      const { name, location, description, image } = req.body;

      // Validate required fields
      if (!name || !location) {
        return res.status(400).json({ message: "Name and location are required" });
      }

      // Create new campus
      const newCampus = new Campus({
        name,
        location,
        description,
        image,
      });

      await newCampus.save();

      res.status(201).json({
        message: "Campus added successfully"
      });
    } catch (error) {
      console.error("Error adding campus:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
}
};
