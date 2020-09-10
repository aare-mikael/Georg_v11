module.exports = {
    name: 'at',
    description: "@ personen du skriver etter -at, så mange ganger som du skriver bakerst.",
    cooldown: 30,
    category: "Text",
    execute(message, args) {

        // Returnerer tidlig om meldingen er sendt av en bot;
        if (message.author.bot) return;

        var trashID = '227520275132973056';

        var msg = message.content.replace("-at ", "");

        var antall = 5;

        if(!args[args.length - 1].match(/\d/)) {
            antall = 3;
        } else {
            antall = args[args.length-1];
            // Pops the last argument, which in this command is the amount of times the user want's to tag the person;
//            args.pop();
        }


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