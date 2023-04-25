const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    usrID : {
        type: Number,
        required: true
    },
    message : {
        type: String,
        required: true
    },
    timestamp : {
        type: Date,
        required: true,
        default: Date.now    
    }
});

const inboxSchema = new mongoose.Schema({
    conversationID : {
        type: Number,
        required: true
    },
    itemName : {
        type: String,
        required: true
    },
    itemSrc : {
        type: String,
        required: true
    },
    messages : {
        type: [messageSchema],
        required: true,
        default: []
    }
});

module.exports = mongoose.model('conversations', inboxSchema)