const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")


router.post('/createAuthor', controller.createAuthor)
router.post('/createBook', controller.createBook)
router.get('/listOfBooks', controller.listBooks)
router.get('/authorName', controller.authorName)
router.get('/findBook', controller.findBook)
router.get('/books/:authorId', controller.bookByAuthorID)
router.get('/authorNameAge', controller.authorNameAge)

module.exports = router;