const mongoose = require('mongoose');

const personalSchema = mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        required: true
    },
    photo:{
        type:String
    }

});

const personal = mongoose.model('personal',personalSchema);

module.exports = personal;