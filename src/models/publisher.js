const mongoose = require('mongoose')

const publisher = new mongoose.Schema({

    name : String,
    headQuarter : String

})

module.exports = mongoose.model("publisherData",publisher)