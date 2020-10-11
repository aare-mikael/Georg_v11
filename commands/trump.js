const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const embed = require(path.join(__dirname, '..', '/utilities', 'TrumpEmbed.js'));

module.exports = {
    name: 'trump',
    description: "This fetches a random idiotic quote of our lord and saviour, Donald Trump.",
    category: "Text",
    async execute(message, args) {
        // Returnerer tidlig om meldingen er sendt av en bot;
        if (message.author.bot) return;

        // Retrieve a random quote from https://api.tronalddump.io/random/quote;
//        let obj = await (await fetch("https://api.tronalddump.io/random/quote")).json();

        let obj = await (await fetch("https://api.tronalddump.io/random/quote")).json();
        console.log(obj)
        console.log(obj.source.url);

        message.channel.send(embed(message, obj));

    },
};