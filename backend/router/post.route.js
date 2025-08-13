const express = require('express')
const protected = require('../middleware/protectedRoute.js')
const router = express.Router();
const postControll = require('../controller/post.controller.js');

const multer  = require('multer')
const {storage} = require('../cloudconfig.js')
const upload = multer({storage })

router.get('/',protected, postControll.getAllPost)
router.post('/',upload.single("image"),protected, postControll.create)
router.get('/:id', protected, postControll.getPostById);
router.put('/:id', protected,postControll.updateLike)
router.delete('/:id',protected, postControll.delete)


module.exports = router