module.exports = {
    name: 'tts',
    description: "Leser opp meldingen i text-to-speech",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var trashID = '227520275132973056';

    var ttsmsg = message.content.replace("tts ", "");

    message.channel.send(ttsmsg, { tts: true });
    message.channel.bulkDelete(1);
    },
};