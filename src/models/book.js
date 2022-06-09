const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookData = new mongoose.Schema({
    book_name : String,
     authorId : {
         type : ObjectId,
         ref : "authorArun"
     },
     price : Number,
     ratings : Number,
     publisherId : {
         type : ObjectId,
         ref : "publisherData"
     },
     isHArdCover :{
          type :  Boolean,
          default : false
          }

})

module.exports = mongoose.model("bookData",bookData)