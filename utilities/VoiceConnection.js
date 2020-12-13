module.exports = function VoiceConnection(voiceChannel){

    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play();
        dispatcher.on('finish', () => dispatcher.destroy());
    }).catch(err => console.log(err));
};