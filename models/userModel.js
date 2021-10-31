const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
    tel: {
        type: String,
        required: true
    },
    cityAddress: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },


}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)