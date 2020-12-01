var path = require("path");
const JoinVoice = require('../utilities/JoinVoice');

module.exports = {
    name: 'join',
    description: "Joiner voice channel",
    category: "Utility",
    execute(message, args) {

        JoinVoice(message)

    },
};