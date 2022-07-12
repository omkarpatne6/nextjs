const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }
})

const Mydata = mongoose.models.NextJS || mongoose.model('NextJS', schema);

module.exports = Mydata