const Router  = require('express');
const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")

router.get('/weather', userController.londonWeather)
router.get('/sorted', userController.temperature)

module.exports = router;
