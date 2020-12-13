module.exports = function VoiceConnection(voiceChannel){

    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play();
        dispatcher.on('finish', () => dispatcher.destroy());
    }).catch(err => console.log(err));
};