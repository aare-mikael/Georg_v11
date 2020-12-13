module.exports = function VoiceConnection(voiceChannel){

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play();
        dispatcher.on('finish', () => dispatcher.destroy());
    }).catch(err => console.log(err));
};