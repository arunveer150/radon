const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDetails = new mongoose.Schema({
    userId : {
        type : ObjectId,
        ref : "user"
    },
    productId : {
        type : ObjectId,
        ref : "product"
    },
    amount : Number,
    date : {
        type : Date,
        default : Date.now
    },
    isFreeAppUser : Boolean

})

module.exports = mongoose.model("order",orderDetails)