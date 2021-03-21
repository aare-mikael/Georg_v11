const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'georg',
    description: "Joins voice channel and plays georg.mp3",
    category: "Funny",
    callback: (message) => {

        const audio = '../../mp3/georg.mp3';

        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play(audio);
            dispatcher.on('finish', () => voiceChannel.leave());
        }).catch(err => console.log(err));
    },
};