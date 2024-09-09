const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timeStamp: { 
            type: Number 
        }
    }]
}, { timestamps: true });

// Correct model creation
const URL = mongoose.model('Url', UrlSchema);  // Changed Schema to model

module.exports = URL;
