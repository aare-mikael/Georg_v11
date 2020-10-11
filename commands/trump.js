const fetch = require('node-fetch');

module.exports = {
    name: 'trump',
    description: "This fetches a random idiotic quote of our lord and saviour, Donald Trump.",
    category: "Text",
    execute(message, args) {
        // Returnerer tidlig om meldingen er sendt av en bot;
        if (message.author.bot) return;

        // Retrieve a random quote from https://api.tronalddump.io/random/quote;
//        let obj = await (await fetch("https://api.tronalddump.io/random/quote")).json();

        let obj = fetch("https://api.tronalddump.io/random/quote");
        console.log(obj);

        let quote = obj.value;
        console.log(quote);

        message.channel.send(quote);

    },
};