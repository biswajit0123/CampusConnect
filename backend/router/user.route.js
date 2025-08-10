
const express = require('express')
const protected = require('../middleware/protectedRoute.js')
const router = express.Router();

const {register, login, logout,getpost  } = require('../controller/user.controller.js')

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/userpost',protected, getpost);
    
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       