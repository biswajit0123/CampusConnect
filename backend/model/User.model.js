const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
          type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
     collegeName:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;