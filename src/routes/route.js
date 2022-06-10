const Router  = require('express');
const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")
const Moment = require('moment')



router.get('/API1', function(req,res){
    res.send("Hello it is first API ")
})
router.get('/API2', function(req,res,next){
    res.send("Hello it is second API ")
})
router.get('/API3', function(req,res,next){
    res.send("Hello it is third API ")
})
router.get('/API4', function(req,res,next){
    res.send("Hello it is fourth API ")
})
module.exports = router;