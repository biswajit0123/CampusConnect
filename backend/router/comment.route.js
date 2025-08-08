const express = require('express')
const protectedRoute = require('../middleware/protectedRoute.js')
const router = express.Router();
const {createComment} = require('../controller/comment.controller.js')

router.post('/:id',protectedRoute,createComment );

module.exports = router;