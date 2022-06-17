const Router  = require('express');
const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")

router.get('/memes', userController.getMemes)
router.post('/create', userController.createMeme)


module.exports = router;
