module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    category: "Text",
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

      message.channel.bulkDelete(1);  
      message.channel.send('¯\\_(ツ)_/¯');
    },
};