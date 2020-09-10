module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

      message.channel.bulkDelete(1);  
      message.channel.send('¯\\_(ツ)_/¯');
    },
};