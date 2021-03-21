const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'georg',
    description: "Joins voice channel and plays georg.mp3",
    category: "Funny",
    callback: (message) => {

        const audio = '../../mp3/georg.mp3';

        VoiceJoin(message, audio);
    },
};