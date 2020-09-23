module.exports = {
    name: 'georg',
    description: "Joiner voice channel og spiller av georg.mp3",
    category: "Voice",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    // Trash#8640
    var trashID = "227520275132973056";

    var voiceChannel = message.member.voice.channel.id;
    console.log(voiceChannel);

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel && message.author.id != trashID) {
        message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        return;
    } else if (!voiceChannel && message.author.id == trashID) {
        var voiceChannel = args[0];
    }

    voiceChannel.join().then(connection => {
    const dispatcher = connection.play('./mp3/georg.mp3');
    dispatcher.on("finish", end => message.member.voice.channel.leave());
    }).catch(err => console.log(err));

    },
};