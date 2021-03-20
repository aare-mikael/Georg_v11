const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
};

const discordUsers = mongoose.Schema({
    id: reqString,
    username: reqString
});

module.exports = mongoose.model('discordUsers', discordUsers);