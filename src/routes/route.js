const Router  = require('express');
const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")

router.get('/cowin/session', userController.session)

module.exports = router;
