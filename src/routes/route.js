const Router  = require('express');
const express = require('express');
const router = express.Router();
const userController= require("../controller/userController.js")
const mid= require("../middleware/auth.js")



router.post('/createUser',userController.user)
router.post('/login', userController.login)
router.get('/users/:userId', mid.authMiddleware, userController.getUserDetails)
router.put('/update/:userId',mid.authMiddleware, userController.updateDetails)
router.delete('/deleted/:userId',mid.authMiddleware, userController.isDeleted)
module.exports = router;
