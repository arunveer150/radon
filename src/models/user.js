const mongoose = require('mongoose')

const userData = new mongoose.Schema({
        firstName : {
                type : String,
                required : true},
        lastName : String,
        mobile : String,
        emailId : String,
        password : String,
        age : Number,
        gender : {
                type : String,
                enum:["male", "female", "others"]
        },
        isDeleted :{type :  Boolean,
                default: false
        }

},{timestamps:true})

module.exports=mongoose.model('user', userData)