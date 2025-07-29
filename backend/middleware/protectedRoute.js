
const protectedRoute = async (req, res, next) =>{
    next();
}

module.exports = protectedRoute