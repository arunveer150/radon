const mongoose = require('mongoose')

const author = new mongoose.Schema({
    author_id : {
        type : Number,
        required : true
        },
        author_name : String,
        age : Number,
        address : String

})

module.exports = mongoose.model("author",author)