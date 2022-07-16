const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alltest :[
        {
            type:  mongoose.Schema.Types.ObjectId,
            rel:'test'   
        }
    ]
}, {
    timestamps: true
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;