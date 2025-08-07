const { Messages } = require('openai/resources/beta/threads/messages.mjs');
const User = require('../model/User.model.js')
const jwt = require('jsonwebtoken')
const protectedRoute = async (req, res, next) =>{
   
   const { token } = req.cookies;  // ✅ CORRECT
if(!token) {
    return res.status(409).json({Messages:"unAuthorized", success:false})
}
console.log(token)
 const {id} = await jwt.verify(token,process.env.JWT_SECRET );
 if(!id){
    return res.status(409).json({Messages:"UnAuthorized" , success:false})
 }

 const user = await User.findById(id);

 if(!user){
    return res.status(409).json({Messages:"UnAuthorized" , success:false})
    
 }
req.user = user;
next();

}

module.exports = protectedRoute