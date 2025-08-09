const express = require('express')
const protectedRoute = require('../middleware/protectedRoute.js')
const router = express.Router();
const {createComment, deleteComment} = require('../controller/comment.controller.js')

router.post('/:id',protectedRoute,createComment );
router.delete('/:postId/:commentId', protectedRoute,deleteComment)
module.exports = router;