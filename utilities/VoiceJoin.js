const VoiceConnection = require("./VoiceConnection");

module.exports = function VoiceJoin(message, audio){

    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var voiceChannel = message.member.voice.channel;

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel) {
        message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        return;
    }

    VoiceConnection(voiceChannel, audio);
};