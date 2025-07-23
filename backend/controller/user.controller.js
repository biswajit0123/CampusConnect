const User = require('../model/User.model.js')

module.exports.register = async (req, res) =>{
const {fullName, userName, email, password, collegeName, course, branch} = req.body;

if(!fullName || !userName || !email || !password || !collegeName || !course || !branch){
   return res.status(400).json({message:"fill all the details"});
}

//if username/email already exists
const existUser =await User.findOne({ $or:[
   {userName:userName},
   {email:email}
]})

if(existUser){
   return res.status(401).json({message:"User already exists"});
}

try {
  const user = new User({
   fullName,
   userName,
   email,
   password,
   collegeName,
   course,
   branch,
}) 

const savedUser = await user.save();

return res.status(201).json({message:"register succesfully", user:savedUser})
} catch (error) {
   return res.status(501).json()
}




}

module.exports.login = async (req, res) =>{
   res.send("login")
}

module.exports.logout = async (req, res) =>{
   res.send("logout")
}