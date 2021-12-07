const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true,
        trim: true
    },
    lastName : {
        type : String,
        trim: true
    },
    email : {
        type : String,
        required: true,
        trim : true
    },
    contact : {
        type : String,
        trim : true
    },
    address : {
        type : String,
        trim : true
    }
}, {timestamps : true});


module.exports = mongoose.model('User', userSchema);