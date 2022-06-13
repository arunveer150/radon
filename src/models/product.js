const mongoose = require('mongoose')

const productData = new mongoose.Schema({
    name : String,
  category : String,
  price : {
    type : Number,
    required : true
  }
})

module.exports= mongoose.model('product', productData)