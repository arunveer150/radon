const express = require('express');
const logger =require("../logger/logger.js")

const util= require("../util/helper.js")

const validator= require("../validator/formatter.js")

const router = express.Router();

router.get('/test-me', function (req, res) {
   logger.welocome()

   util.date()
   util.month()
   util.batch()

   console.log("Original String:" + validator.string)
   validator.trim()
   validator.lower()
   validator.upper()
    res.send('My first ever api!')
});

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
//});

module.exports = router;
// adding this comment for no reason