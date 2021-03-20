const mongoose = require('mongoose');

const discordUsers = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('discordUsers', discordUsers);