const mongoose = require('mongoose')
const bookModel = require('../models/bookModel.js')


//API for create book
const createBook= async function(req,res){

    let data = req.body
    let createData = await bookModel.create(data)
    
    res.send({here : createData})
}

// API for Book lists
const bookList= async function(req,res){

    let bookList = await bookModel.find().select({bookName : 1, authorName : 1, _id : 0})

    res.send({here : bookList})
}

// API for get Book by Year

const getBooksYear = async function(req,res){
    let x = req.body
    let getBooks = await bookModel.find(x)

    res.send({hi : getBooks })
}

// API for get Particular Books

const getParticular = async function(req,res){

    let x= req.body
    let getParticularData = await bookModel.find(x)

    res.send({hi : getParticularData})

}

// API for get book by price tag

const getBooksByPrice = async function(req,res){
    
    let bookPrice = await bookModel.find({$or : [{price : {indianPrice : "100INR"}},{price : {indianPrice : "200INR"}}, {price : {indianPrice : "500INR"}}]})

    res.send({hi : bookPrice})
    }
// API for get random books

const getRandom = async function(req,res){
    let bookRandom = await bookModel.find({noOfPages : {$gt : 500}, stockAvailable : true})
    res.send({hi : bookRandom})
}


module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksYear=getBooksYear
module.exports.getParticular=getParticular
module.exports.getBooksPrice=getBooksByPrice
module.exports.getRandom=getRandom
