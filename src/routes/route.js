const Router  = require('express');
const express = require('express');
const router = express.Router();
const userController = require("../controller/userController.js")
const userMiddleware = require("../middleware/userMiddleware.js")
const productController = require("../controller/productController.js")
const orderMiddleware = require("../middleware/orderMiddleware.js")
const orderController = require("../controller/orderController.js")


router.post('/createUser',userMiddleware.userMid, userController.user)
router.post('/createProduct', productController.productDetails)
router.post('/createOrder', orderMiddleware.checkHeader,orderMiddleware.userCheck, orderController.createOrder)
module.exports = router;