const User = require('../model/User.model.js')

const protectedRoute = async (req, res, next) =>{
   
   const { token } = req.cookies;  // ✅ CORRECT
console.log(token);

}

module.exports = protectedRoute