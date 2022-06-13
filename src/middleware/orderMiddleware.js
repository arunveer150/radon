//const order = require("../models/order.js")
const order = require("../models/order.js")
const user = require("../models/user.js")
const product = require("../models/product")

const checkHeader = function(req,res,next){
    let header = req.headers
    if(header.hasOwnProperty('isfreeappuser')){
        next()
    } else {
        res.send("header is mising")
    }
}

const validationCheck = async function(req,res,next){
    let data1 = req.body
    let userId = req.body.userId
    let check1 = await user.findById(userId)
    let productId=req.body.productId
    let check2 = await product.findById(productId)
   
    if(check1){
        if(check2){
            let createOrder= await order.create(data1)
           // res.send({here : createOrder})
           next()
        }
     else {
        res.send("ProductId is not match")
    }
    }
 else {
    res.send("userId is not match")
}
}

const priceCheck = async function(req,res,next){
    let productId = req.body.productId
    let a = await product.findById(productId) 
    let price = a.price
    let userId = req.body.userId
    let b = await user.finddById(userId)
    let balance = b.balance
    let c= await order.findOne(userId)
    let id= c._id
    let header = req.headers["isfreeappuser"]
    if(header==true){
        let updateData = await order.updateOne({id},{$set : {is}})
    }
}
module.exports.checkHeader=checkHeader
module.exports.userCheck=validationCheck
