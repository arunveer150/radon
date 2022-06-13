const user = require('../models/user.js')
const mongoose = require('mongoose')

const userData = async function(req,res){
    let data = req.body 
    let createUser = await user.create(data)
    res.send({here : createUser})
}
module.exports.user=userData