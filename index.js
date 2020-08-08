// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

// Requires the config file, which can be used for sensitive info;
const { prefix, token } = require('./config.json');

// Creates a new Discord client, essentially this is the bot;
const client = new Discord.Client();



// Hide your token at all costs, which is what I've done here;
client.login(token);

// When client is ready, this code will be run and will only trigger once after logging in;
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('with your heart');
});

// Makes the bot immediately stop reading upon finding that the message doesnt start with the prefix specified in config.json, which saves power and time;
if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim();
const command = args.shift().toLowerCase();

if(message.content == "test a feature") {
    message.channel.send(command);
};