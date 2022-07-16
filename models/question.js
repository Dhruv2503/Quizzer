const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionHead: {
        type:String,
        required: true,
    },
    options :[{
        type: String
        // required: true
    }],
    answer:{
        type :String,
        required : true
    },
    points:{
        type :Number,
        required :true
    }
}, {
    timestamps: true
});

const question= mongoose.model('question', questionSchema);

module.exports = question;