const mongoose = require('mongoose')

const timingSchema = new mongoose.Schema({
    days: {
        type: String
    },
    time: {
        type: String
    }
})

const contactSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    email:{
        type: String,
    },
    number:{
        type: Number,
    },
    timings: [timingSchema]
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact