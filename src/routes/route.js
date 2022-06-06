const express = require('express');
const router = express.Router();
const bookController = require('../bookController/bookController.js')

router.post('/createBook', bookController.createBook)
router.get('/bookList', bookController.bookList )
router.post('/getBooksInYear', bookController.getBooksYear)
router.post('/getParticularBooks', bookController.getParticular)
router.get('/getXINRBooks', bookController.getBooksPrice)
router.get('/getRandomBooks', bookController.getRandom )

module.exports = router;