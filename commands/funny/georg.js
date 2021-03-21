const VoiceJoin = require("../../utilities/VoiceJoin");

module.exports = {
    name: 'georg',
    description: "Joins voice channel and plays georg.mp3",
    category: "Funny",
    callback: ({ message} ) => {

        const audio = '../../mp3/georg.mp3';

        const { voice } = message.member;

        if (!voice.channelID) {
            message.channel.send('Sorry, but you have to be in a voicechannel to use this command!');
        }

        voice.channel.join().then(connection => {
            const dispatcher = connection.play(audio);
            dispatcher.on('finish', () => voice.channel.leave());
        }).catch(err => console.log(err));
    },
};