const mongoose = require('mongoose');

const discordUsers = mongoose.Schema({
    id: String,
    username: String
});

module.exports = mongoose.model('discordUsers', discordUsers);