const mongoose = require('mongoose')

const poetSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Name Is Required"]
    },

    poetry: {
        type: String,
        require: [true, "Poetry Is required"]
    }
})

module.exports = mongoose.model ("Poetry", poetSchema);