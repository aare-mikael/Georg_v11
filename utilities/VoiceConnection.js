module.exports = function VoiceConnection(voiceChannel, audio){

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(audio);
        dispatcher.on('end', () => dispatcher.destroy());
    }).catch(err => console.log(err));
};