module.exports = {
    name: 'mp3',
    description: "Plays the mp3-file you provide the link to",
    category: "Voice",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var voiceChannel = message.member.voice.channel;

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel) {
        message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        return;
    }

    const mp3link = args[0];

    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(mp3link);
        dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
    },
};