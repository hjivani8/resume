const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    }

});

const project = mongoose.model('project',projectSchema);

module.exports = project;