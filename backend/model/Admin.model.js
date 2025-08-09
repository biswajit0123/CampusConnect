// models/Admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  role:{
   type: String,
  }
  
  },
  { timestamps: true }
);





const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
