const VoiceJoin = require("../utilities/VoiceJoin");
const VoiceSpeaking = require("../utilities/VoiceSpeaking");

module.exports = {
    name: 'georg',
    description: "Joiner voice channel og spiller av georg.mp3",
    category: "Voice",
    execute(message, args) {
        // // Returnerer tidlig om meldingen er sendt av en bot;
        // if (message.author.bot) return;

        // var voiceChannel = message.member.voice.channel;

        // // Returnerer error-message om brukeren ikkje er i en voice-kanal
        // if (!voiceChannel) {
        //     message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        //     return;
        // };

        // if(voiceChannel == undefined || voiceChannel == null) return;

        // voiceChannel.join().then(connection => {
        // const dispatcher = connection.play('./mp3/georg.mp3');
        // dispatcher.on("finish", end => message.member.voice.channel.leave());
        // }).catch(err => console.log(err));


        const connected = Boolean(VoiceSpeaking(message));

        if(connected) {
            message.channel.send("As I'm currently already speaking I will not rudely interrupt myself.");
        } else {
        VoiceJoin(message).then(connection => {
        const dispatcher = connection.play('./mp3/georg.mp3');
        dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
        }
    },
};