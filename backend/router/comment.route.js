const express = require('express')

const router = express.Router();
const {createComment} = require('../controller/comment.controller.js')

router.post('/:id',createComment )

module.exports = router;