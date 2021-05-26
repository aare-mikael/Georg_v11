var path = require("path");
const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'join',
    description: "Joiner voice channel",
    category: "Utility",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        VoiceJoin(message)

    },
};