const mongoose = require('mongoose');
const schema = mongoose.Schema;


var page = new schema({pageID: String, pageName: String, pageAccessToken: String, subscribed: Boolean});

const intents = new schema({
    pageID: String,
    intentName: String,
    intentAction: String,
    questios: {type: [String], default: []},
    answers: {type: [String], default: []}
}, {timestamps: true});

const modelClass = mongoose.model('intents', intents);

module.exports = modelClass;
