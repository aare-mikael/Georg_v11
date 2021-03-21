var path = require("path");
const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'join',
    description: "Joiner voice channel",
    category: "Utility",
    execute(message, args) {

        VoiceJoin(message)

    },
};