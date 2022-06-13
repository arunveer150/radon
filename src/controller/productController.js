const mongoose = require('mongoose')

const product = require('../models/product.js')

const productDetails = async function(req,res){
    let data = req.body
    let createProduct = await product.create(data)
    res.send({here : createProduct})
}

module.exports.productDetails=productDetails