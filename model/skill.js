const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({

    skill:{
        type:String,
        required: true
    }

});

const skill = mongoose.model('skill',skillSchema);

module.exports = skill;