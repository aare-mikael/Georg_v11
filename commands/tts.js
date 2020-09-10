<<<<<<< HEAD
module.exports = {
    name: 'tts',
    description: "Leser opp meldingen i text-to-speech",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var trashID = '227520275132973056';

    var ttsmsg = message.content.replace("-tts ", "");

    message.channel.send(ttsmsg, { tts: true });
    message.channel.bulkDelete(1);
    },
=======
module.exports = {
    name: 'tts',
    description: "Leser opp meldingen i text-to-speech",
    category: "Text",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    var trashID = '227520275132973056';

    var ttsmsg = message.content.replace("-tts ", "");

    message.channel.send(ttsmsg, { tts: true });
    message.channel.bulkDelete(1);
    },
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};