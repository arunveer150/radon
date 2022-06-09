const mongoose = require('mongoose')
const author = require("../models/author.js")
const book = require("../models/book.js")
const publisher = require("../models/publisher.js")

const createAuthor = async function(req,res){
    let data = req.body
    let authorCreate = await author.create(data)

    res.send({here :authorCreate})
}



const createPublisher = async function(req,res){
    let data = req.body
    let publisherCreate = await publisher.create(data)
   
    res.send({here : publisherCreate})

}
// const isValid = function(ObjectId){
//     return mongoose.Types.ObjectId.isValid(ObjectId)
// }
const createBook = async function(req,res){
    let data = req.body
   // let a = await author.find()
    if(data.hasOwnProperty('authorId')===false){
        res.send("authorId is required")
       
     } 
    const findIdAuthor = await author.findById(data.authorId)
    
    if(!findIdAuthor)
    {
      res.send("Author ID is invalid")
       
       }
        
    if(data.hasOwnProperty('publisherId')===false){
      res.send("publisherId is required")
    }
     const publisherinfoId = await publisher.findById(data.publisherId)
    if(!publisherinfoId)
    {
       res.send("Publisher Id is invalid")
    }
    let createBook = await book.create(data)
    res.send({here : createBook})
}

const getBook = async function(req,res){
    let get = await book.find().populate('authorId').populate('publisherId')
   
    res.send({here : get})
}

const changeHardCover = async function(req,res){
   
    let a = await publisher.find({name : {$in :["penguin", "HarperCollins"]}})
    let b= await a.map(Element => Element._id)


    let hard = await book.updateMany({publisherId : {$in : b}}, {isHArdCover : true})
 let updated = await book.find()
    res.send({here : updated})
}

const updatedPrice = async function(req,res){
    let a = await author.find({rating : {$gt : 3.5}})
    let b = await a.map(x => x._id)
    let c = await book.updateMany({authorId :{ $in : b}},{$inc : {price : -10}},{new : true})
   let updatedBook = await book.find()
    res.send({here : updatedBook})
}
module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook

module.exports.getBook= getBook
module.exports.changeHardCover=changeHardCover

 module.exports.updatedPrice=updatedPrice
// module.exports.authorNameAge=authorNameAge
