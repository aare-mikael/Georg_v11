var improvements = [
    "har du prøvd å skru maskina di av og på igjen?",
    "har du prøvd å kjøpe meir RGB?",
    "har du prøvd å trykke på mouse1?",
    "e du sikker på at du har åpna spillet?",
    "har du vurdert å gi opp?",
    "et tips kan være å sikte på motstanderen.",
    "ditta e nesten litt sus",
    "har du klaga nok på dårlig nettkode?",
    "e du sikker på at du har nok fps?",
    "du bør sikkert oppgradere PC'en din",
    "har du kjøpt deg gamingsokker?",
    "musa e sikkert utslitt. Kjøp deg ny",
    "har du prøvd å åpne augene dine?",
    "har du kjøpt nye datadeler på NetPartner i det siste?",
    "ingenting eg seie kan hjelpe det trailerlasset du ser ut som å treffe det du skal",
    "gi opp"
]

module.exports = {
    name: 'improve_aim',
    description: "Dinna e nesten litt sus å bruke",
    category: "Text",
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    if ( !args[0] ) {
      var bruker = message.author.username;
    } else {
        // Henter ut personen som skal roastes;
        var bruker = args[0];
    }

    var antallImprovements = improvements.length;
    var improvement = Math.floor(Math.random() * antallImprovements - 1) + 1;
    var tips =  improvements[improvement];
      
    // Spyr ut en tilfeldig insult fra insults[];      
      message.channel.send(bruker + ", " + tips);
    },
};