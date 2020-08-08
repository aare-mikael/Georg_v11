// fs is Node's native file system module;
const fs = require('fs');

// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

// Requires the prefix specified in config.json, to avoid issues where a command name is randomly said without meaning to invoke the command;
const { prefix, token } = require('./config.json');

// Creates a new Discord client, essentially this is the bot;
const client = new Discord.Client();

// Creates a collection with all the commands;
client.commands = new Discord.Collection();

// Declares an array which contains all files in commands which ends in .js, which is Javascript-files;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    // Requires all files in commands;
    const command = require(`./commands/${file}`);

    // Set a new item in the collection with the key as the commandname and the value as the exported module;
    client.commands.set(command.name, command);
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
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)

    if(command.args && !args.length) {
        let reply = message.channel.send(`You didn't provide any arguments, ${message.author}!`)

        if(usage == true) {
            if(command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command!");
    }
    
});