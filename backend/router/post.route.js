const express = require('express')
const protected = require('../middleware/protectedRoute.js')
const router = express.Router();
const postControll = require('../controller/post.controller.js');

router.get('/',protected, postControll.getAllPost)
router.post('/', postControll.create)
router.delete('/:id', postControll.delete)


module.exports = router