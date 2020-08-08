// fs is Node's native file system module;
const fs = require('fs');

// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

// Requires the prefix specified in config.json, to avoid issues where a command name is randomly said without meaning to invoke the command;
const { prefix, token } = require('./config.json');

// Creates a new Discord client, essentially this is the bot;
const client = new Discord.Client();

// Creates a collection with all the commands dealing with text, like "delete" and "hangman";
client.textcommands = new Discord.Collection();

// Declares an array which contains all files in textcommands which ends in .js, which is Javascript-files;
const textcommandFiles = fs.readdirSync('./textcommands').filter(file => file.endsWith('.js'));

for (const file of textcommandFiles) {
    // Requires all files in textcommands;
    const textcommand = require(`./textcommands/${file}`);

    // Set a new item in the collection with the key as the commandname and the value as the exported module;
    client.textcommands.set(textcommand.name, textcommand);
}


// Hide your token at all costs;
client.login(token);

// When client is ready, this code will be run and will only trigger once after logging in;
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('with your heart');
});

// Makes the bot react when a textmessage pops into a channel it has access to;
client.on('message', message => {
    
    // Forces the bot to return immediately when the message doesn't contain the specified prefix, which saves resources;
    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test') {
        message.channel.send('test working');
    }
});