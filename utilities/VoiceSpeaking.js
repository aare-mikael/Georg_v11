module.exports = function VoiceSpeaking(message, args){

    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    // Må få tak i guild id for å sjekke dispatcher;
    const discordServer = message.guild;

    console.log(discordServer.voiceStates);

    // Sjekker om bot'en har en aktiv dispatcher i den gjeldende serveren;
//    const connection = discordServer.voiceConnection.speaking;

//    const speaking = Boolean(connection);

//    if (speaking) {
//        console.log("Dispatcher is already connected")
//    }

//    return speaking;
};