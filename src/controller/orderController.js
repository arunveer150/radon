const order = require("../models/order.js")
const user = require("../models/user.js")
const product = require("../models/product")
const mongoose = require('mongoose')

const createOrder = async function(req,res){
    let data = req.body
    //res.send("done")
    let a = await order.find()
    res.send({here : a})

}

module.exports.createOrder=createOrder