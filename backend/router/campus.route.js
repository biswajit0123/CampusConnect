
const express = require('express')
const campusController = require('../controller/campus.controller.js')

const router = express.Router();

router.get('/', campusController.campusName)
router.get('/:name', campusController.getPostByCampus)

    
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       