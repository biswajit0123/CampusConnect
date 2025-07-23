
const express = require('express')

const router = express.Router();

const {register, login, logout } = require('../controller/user.controller.js')

router.get('/register',register)
router.get('/login',login)
router.get('/logout',logout)


module.exports = router