const mongoose = require('mongoose')

const userData = new mongoose.Schema({
        name : String,
        balance : {
                type : Number,
                default: 100
        },
        address : String,
        age : Number,
        gender : {
                type : String,
                enum:["male", "female", "others"]
        },
        isFreeAppUser :{type :  Boolean,
                default: false
        }

})

module.exports=mongoose.model('user', userData)