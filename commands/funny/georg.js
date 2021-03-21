const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'georg',
    description: "Joins voice channel and plays georg.mp3",
    category: "Voice",
    execute(message, args) {

        const audio = '../../mp3/georg.mp3';

        VoiceJoin(message, audio);
    },
};