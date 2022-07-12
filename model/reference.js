const mongoose = require('mongoose');

const referenceSchema = mongoose.Schema({

    job_title:{
        type:String,
        required: true
    },
    company_name:{
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
        unique: true,
    }

});

const reference = mongoose.model('reference',referenceSchema);

module.exports = reference;