const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({

    objective:{
        type:String,
        required: true
    }

});

const object = mongoose.model('object',objectSchema);

module.exports = object;