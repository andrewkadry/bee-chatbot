const mongoose = require('mongoose');
const schema = mongoose.Schema;


var page = new schema({
    pageID: String,
    pageName: String,
    pageAccessToken: String,
    subscribed: Boolean,
    dFallBack: {type: String, default: "i cant understand :D "}
});

const userpage = new schema({
    userID: String,
    userName: String,
    userPages: {type: [page], default: []}
}, {timestamps: true});

const modelClass = mongoose.model('users', userpage);

module.exports = modelClass;
