const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    testadmin: {
        type:  mongoose.Schema.Types.ObjectId,
        rel:'admin',
        required: true
    },
    testname: {
        type: String,
        required: true,
        unique:true
    },
    participants:[
        {
            name:{ type : String},
            score:{ type : Number}
        }
    ],
    questions:[{
        type:  mongoose.Schema.Types.ObjectId,
        rel:'question'
    }],
    valid:{
        type:Boolean,
        required:true
    },
    startdate:{
        type: Date ,
        required:true
    },
    duedate:{
        type: Date ,
        required:true
    }
}, {
    timestamps: true
});

const test = mongoose.model('test', testSchema);

module.exports = test;