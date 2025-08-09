
const express = require('express')
const adminController = require('../controller/admin.controller.js')
const router = express.Router();


router.post('/login',adminController.login)
router.post('/signup',adminController.adminCreate)
router.post('/logout', adminController.logout);
    
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       