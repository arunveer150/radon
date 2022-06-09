const mongoose = require('mongoose')

const authorData = new mongoose.Schema({
        author_name : String,
        age : Number,
        address : String,
        rating: Number

})

module.exports = mongoose.model("authorArun",authorData)