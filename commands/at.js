module.exports = {
    name: 'at',
    description: "@ personen du skriver etter -at",
    cooldown: 30,
    execute(message, args) {

        // Returnerer tidlig om meldingen er sendt av en bot;
        if (message.author.bot) return;

        var trashID = '227520275132973056';

        var msg = message.content.replace("-at ", "");

        var antall = args[args.length-1];

        args.pop();

        if (antall > 20) {
            message.channel.send("Sorry bud, but I'm not gonna spam this user more than 20 times at a time!");
        } else if (!antall) {
            var i = 0;
            var j = 5;
            for (i = 0; i < j; i++) {
                message.channel.send(args.join(' '));
            }
        } else {
            var i = 0;
            for (i = 0; i < antall; i++) {
                message.channel.send(args.join(' '));
            }
        }
    },
};