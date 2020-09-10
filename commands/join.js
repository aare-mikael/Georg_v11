<<<<<<< HEAD
module.exports = {
    name: 'join',
    description: "Joiner voice channel",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var voiceChannel = message.member.voice.channel;

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel) {
        message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        return;
    }

    voiceChannel.join().catch(err => console.log(err));
    },
=======
module.exports = {
    name: 'join',
    description: "Joiner voice channel",
    category: "Utility",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var voiceChannel = message.member.voice.channel;

    // Returnerer error-message om brukeren ikkje er i en voice-kanal
    if (!voiceChannel) {
        message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
        return;
    }

    voiceChannel.join().catch(err => console.log(err));
    },
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};