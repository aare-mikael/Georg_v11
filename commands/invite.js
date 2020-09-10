<<<<<<< HEAD
module.exports = {
    name: 'invite',
    description: "Sends an invite link for inviting this bot to other discord servers!",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    //Endrer alle meldinger til lowercase for å hindre case-sensitive commands;
    const msg = message.content.toLowerCase();

        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2146696823&scope=bot');
    },
=======
module.exports = {
    name: 'invite',
    description: "Sends an invite link for inviting this bot to other discord servers!",
    category: "Utility",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    //Endrer alle meldinger til lowercase for å hindre case-sensitive commands;
    const msg = message.content.toLowerCase();

        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2146696823&scope=bot');
    },
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};