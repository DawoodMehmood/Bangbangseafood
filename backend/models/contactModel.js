const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact