
const { find } = require("../models/author.js")
const author = require("../models/author.js")
const book = require("../models/book.js")

const createAuthor = async function(req,res){
    let data = req.body
    let createAuthor = await author.create(data)

    res.send({here : createAuthor})
}

const createBook = async function(req,res){
    let data = req.body
    let createBook = await book.create(data)

    res.send({here : createBook})
}

const listBooks = async function(req,res){
    let x = await author.find({author_name : "Chetan Bhagat"}).select({author_id : 1, _id : 0})
    
    let data = await book.find({author_id : x[0].author_id})
    res.send({hi : data})
}

const authorName = async function(req,res){
    let y= await book.findOneAndUpdate({name : "Two states"},{price : 100},{new : true}).select({price:1,author_id : 1,  _id : 0})

    let z = await author.find({author_id : y.author_id}).select({author_name : 1})
    let price = y.price

    res.send({z,price})
}

const findBook = async function(req,res){
    let a = await book.find({price :{$gte : 50, $lte : 100}}).select({author_id : 1,_id : 0})
   

    let b= await author.find({$or : a}).select({author_name : 1})
   
    
    res.send({here : b})

}
module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.listBooks=listBooks
module.exports.authorName= authorName
module.exports.findBook=findBook
