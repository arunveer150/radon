const express = require('express');
const router = express.Router();
const logic= require("../logic/logic.js")
router.post('/bookName', logic.newBook)

router.get('/listOfBooks', logic.listOfBooks)

module.exports = router;