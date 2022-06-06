const mongoose = require('mongoose')

const bookModel = new mongoose.Schema({

    bookName : {
        type : String,
        required : true
    },
    price : {
        indianPrice : String,
        europeanPrice : String
    },
    year :{
        type : Number,
        default : 2021
    },
    tags : {
        type : [ String ]
    },
    authorName : String,
    noOfPages : {
        type : Number,
        required : true
    },
    stockAvailable : Boolean
},{timestamps : true})

module.exports = mongoose.model('booksData', bookModel)