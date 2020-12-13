module.exports = function VoiceConnected(message, args){

    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    // Må få tak i guild id for å sjekke dispatcher;
    const discordServer = message.guild;

    // Sjekker om bot'en har en aktiv dispatcher i den gjeldende serveren;
    const connection = discordServer.voiceConnection;

    const connected = Boolean(connection);

    if (connected) {
        console.log("Dispatcher is already connected")
    }

    return connected;
};