const book = require("../models/model")
const mongoose=require("mongoose")

const newBook= async function(req,res){
    let data= req.body
    let saveData= await book.create(data)

    console.log(saveData)
    res.send("check mongoDB")
}

const listOfBooks= async function(req,res){
    let alluser=await book.find()

res.send({here : alluser})}

module.exports.newBook=newBook
module.exports.listOfBooks=listOfBooks