const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
};

const discordUsers = mongoose.Schema({
    user: reqString,
    id: reqString,
    username: reqString,
    sentMessages: Number,
    commandsUsed: Number,
    nameHistory: [String],
    introSound: [String],
});

module.exports = mongoose.model('discordUsers', discordUsers);