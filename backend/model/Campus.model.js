const mongoose = require('mongoose')

const campusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    location: {
     type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
  
    image: {
      type: String, // URL of the campus image
    },
  
  });

const Campus = mongoose.model("Campus", campusSchema);
module.exports = Campus