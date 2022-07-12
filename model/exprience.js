const mongoose = require('mongoose');

const exprienceSchema = mongoose.Schema({

    company_name:{
        type:String,
        required: true
    },
    job_title:{
        type:String,
        required: true
    },
    start_date:{
        type:String,
        required: true
    },
    end_date:{
        type:String,
        required: true
    },
    details:{
        type:String,
        required: true
    }

});

const exprience = mongoose.model('exprience',exprienceSchema);

module.exports = exprience;