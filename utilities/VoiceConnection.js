module.exports = function VoiceConnection(voiceChannel, audio){

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(audio);
        dispatcher.on('finish', () => voiceChannel.leave());
    }).catch(err => console.log(err));
};