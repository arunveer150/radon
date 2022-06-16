const user = require('../models/user.js')
const mongoose = require('mongoose')
const jwt= require('jsonwebtoken')

const userData = async function(req,res){
   try{
    let data = req.body 
    if(Object.keys(data).length!=0){
    let createUser = await user.create(data)
   // let get = await user.find()
    res.status(201).send({here : createUser})
    }
    else {
        res.status(400).send({msg : "no data found"})
    }
}
catch(err){
    res.status(500).send({error : err.message})
}
}

const login = async function(req,res){
   try{
    let userId = req.body.emailId
    let password = req.body.password
    let login = await user.findOne({emailId : userId,password : password})
    if(!login){
        return res.status(404).send({status : false, msg : "check you login credential"})
    }
    let token = await jwt.sign({userId : login._id.toString(),
    batch : "radon"},"function-up")
    res.setHeader("x-auth-token",token)
    res.status(201).send({status : true, msg : token})
}
 catch(err){
    res.status(500).send({error : err.message})
 }
}

const getUserDetails = async function(req,res){
    try{
    let userId = req.params.userId 
    let getUser = await user.findById(userId)
    if(!getUser){
        return res.status(404).send({status : false, msg : "no such data"})
    }
    res.status(201).send({status : true, msg : getUser})
}
catch(err){
    res.status(500).send({error : err.message})

}
}

const updateDetails = async function(req,res){
    try{
    let userId=req.params.userId 
    let data = req.body
    let updated = await user.findOneAndUpdate({_id : userId},data,{new : true})
    res.status(200).send({here : updated})

}
catch(err){
    res.status(400).send({error : err.message})
}
}

const isDeleted = async function(req,res){
  try{
    let userId = req.params.userId
    let data = await user.findOneAndUpdate({_id : userId},{isDeleted : true},{new : true})
    res.status(200).send({here : data})

}
catch(err){
    res.status(500).send({error : err.message})

}
}
module.exports.user=userData
module.exports.login=login
module.exports.getUserDetails=getUserDetails
module.exports.updateDetails=updateDetails
module.exports.isDeleted=isDeleted
