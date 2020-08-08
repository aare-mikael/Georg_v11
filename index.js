// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

// Creates a new Discord client, essentially this is the bot;
const client = new Discord.Client();



// Hide your token at all costs;
client.login("NzQxNzAzOTIxODc3MTIzMTY0.Xy7bmw.JdnS0O6PmdyzKWnDHhu66yW8UQg");

// When client is ready, this code will be run and will only trigger once after logging in;
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('with your heart');
});

// Makes the bot react when a textmessage pops into a channel it has access to;
client.on('message', message => {
    if(message.content === 'test') {
        message.channel.send('test working');
    }
})