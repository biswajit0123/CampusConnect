const User = require('../model/User.model.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const hasedPassword =await bcrypt.hash(password,10);
try {
  const user = new User({
   fullName,
   userName,
   email,
   password:hasedPassword,
   collegeName,
   course,
   branch,
}) 

const savedUser = await user.save();

const token = jwt.sign(
   {id:savedUser._id},
   process.env.JWT_SECRET,
   {expiresIn:'1h'}
)

res.cookie('token',token,{
   httpOnly:true,
   secure:false,
   sameSite:'strict',
   maxAge: 60 * 60 * 1000
});

return res.status(201).json({message:"register succesfully", user:savedUser})
} catch (error) {
   return res.status(501).json()
}




}

module.exports.login = async (req, res) =>{
   const { email, password} = req.body;
   
   if(!email || !password){
      return res.status(401).json({message:"fill the details first"});
   }

   //find user
   try {
      const user = await User.findOne({email});
      if(!user){
         return RunStepsPage.status(401).json({message:"User not found"});
      }

      const isMatch =await bcrypt.compare( password, user.password);
      if(!isMatch){
         return res.status(401).json({message:"incorrect password"});
      }
      const token = jwt.sign(
   {id:user._id},
   process.env.JWT_SECRET,
   {expiresIn:'1h'}
)

res.cookie('token',token,{
   httpOnly:true,
   secure:false,
   sameSite:'strict',
   maxAge: 60 * 60 * 1000
});
      return res.status(200).json({message:"loggedin succesfully", user:user})
   } catch (error) {
      console.log("error in", error);
      return res.status(402).json({message:"internal server error"});
   }
}


module.exports.logout = (req, res) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.status(402).json({ message: "Token is missing" });
//   }

//   try {
//     const userId = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Logging out user:", userId);

//     res.clearCookie('token', {
//       httpOnly: true,
//       secure: false, // Set to true in production
//       sameSite: 'strict'
//     });

//     return res.status(200).json({ message: "Logged out successfully" });

//   } catch (err) {
//     console.error("JWT verify failed:", err.message);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }


 res.clearCookie('token', {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'strict'
    });

    return res.status(200).json({ message: "Logged out successfully" });
};

