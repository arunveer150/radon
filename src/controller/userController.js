const user = require('../models/user.js')
const mongoose = require('mongoose')
const jwt= require('jsonwebtoken')

const userData = async function(req,res){
    let data = req.body 
    let createUser = await user.create(data)
    res.send({here : createUser})
}

const login = async function(req,res){
    let userId = req.body.emailId
    let password = req.body.password
    let login = await user.findOne({emailId : userId,password : password})
    if(!login){
        return res.send({status : false, msg : "check you login credential"})
    }
    let token = await jwt.sign({userId : login._id.toString(),
    batch : "radon"},"function-up");
    res.setHeader("x-auth-token",token)
    res.send({status : true, msg : token})
}

const getUserDetails = async function(req,res){
    let userId = req.params.userId
    
    let getUser = await user.findById(userId)
    if(!getUser){
        return res.send({status : false, msg : "no such data"})
    }
    res.send({status : true, msg : getUser})
}

const updateDetails = async function(req,res){
    let userId=req.params.userId
   
    let data = req.body
    let updated = await user.findOneAndUpdate({_id : userId},data,{new : true})
    res.send({here : updated})

}

const isDeleted = async function(req,res){
    let userId = req.params.userId
    
    let data = await user.findOneAndUpdate({_id : userId},{isDeleted : true},{new : true})
    res.send({here : data})

}
module.exports.user=userData
module.exports.login=login
module.exports.getUserDetails=getUserDetails
module.exports.updateDetails=updateDetails
module.exports.isDeleted=isDeleted
