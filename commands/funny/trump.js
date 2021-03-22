const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const embed = require('../../utilities/TrumpEmbed');

module.exports = {
    name: 'trump',
    description: "This fetches a random idiotic quote of our lord and saviour, Donald Trump.",
    category: "Funny",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
        // Returnerer tidlig om meldingen er sendt av en bot;
        if (message.author.bot) return;

        // Retrieve a random quote from https://api.tronalddump.io/random/quote;
//        let obj = await (await fetch("https://api.tronalddump.io/random/quote")).json();

        let obj = await (await fetch("https://api.tronalddump.io/random/quote")).json();

        message.channel.send(embed(message, obj));

    },
};