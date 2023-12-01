const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    address: {
        type: String,
    },
    email:{
        type: String,
    },
    number:{
        type: Number,
    },
    timing: {
        type: String,
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact