module.exports = {
    name: 'invite',
    description: "Sends an invite link for inviting this bot to other discord servers!",
    category: "Utility",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    //Endrer alle meldinger til lowercase for å hindre case-sensitive commands;
    const msg = message.content.toLowerCase();

        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2146696823&scope=bot');
    },
};