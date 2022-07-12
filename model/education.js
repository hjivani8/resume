const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({

    course:{
        type:String,
        required: true
    },
    university:{
        type:String,
        required: true
    },
    grade:{
        type:String,
        required: true
    },
    year:{
        type:String
    }

})

const education = mongoose.model('education',educationSchema);

module.exports = education;