const VoiceJoin = require("../utilities/VoiceJoin");

module.exports = {
    name: 'georg',
    description: "Joiner voice channel og spiller av georg.mp3",
    category: "Voice",
    execute(message, args) {

        const audio = './mp3/georg.mp3'

        VoiceJoin(message, audio);
        
        console.log(args);
    },
};