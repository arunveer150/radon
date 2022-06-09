const Router  = require('express');
const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")


router.post('/createAuthor', controller.createAuthor)
 router.post('/createPublisher', controller.createPublisher)

router.post('/createBook', controller.createBook)
router.get('/getBook', controller.getBook)
router.put('/changeHardCover', controller.changeHardCover)
router.put('/updatedPrice', controller.updatedPrice)
module.exports = router;