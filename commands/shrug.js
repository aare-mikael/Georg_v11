<<<<<<< HEAD
module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

      message.channel.bulkDelete(1);  
      message.channel.send('¯\\_(ツ)_/¯');
    },
=======
module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    category: "Text",
    execute(message, args) {
    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

      message.channel.bulkDelete(1);  
      message.channel.send('¯\\_(ツ)_/¯');
    },
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};