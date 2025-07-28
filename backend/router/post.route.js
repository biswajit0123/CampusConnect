const express = require('express')

const router = express.Router();
const postControll = require('../controller/post.controller.js');

router.get('/', postControll.getAllPost)
router.post('/create', postControll.create)
router.delete('/', postControll.delete)


module.exports = router