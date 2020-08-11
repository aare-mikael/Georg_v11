// fs is Node's native file system module;
const fs = require('fs');

// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

/*
// Requires the ytdl-core module, which is used for playing yotube audio in voice channels;
const ytdl = require('ytdl-core');
*/

// Requires the prefix specified in config.json, to avoid issues where a command name is randomly said without meaning to invoke the command;
const { prefix, token } = require('./config.json');
const { cooldown } = require('./commands/ping');

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

const cooldowns = new Discord.Collection();

// Hide your token at all costs;
client.login(token);

// When client is ready, this code will be run and will only trigger once after logging in;
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('your heartbeat', { type: 'LISTENING' });
//    client.user.setActivity('with your heart');
});

// Makes the bot react when a textmessage pops into a channel it has access to;
client.on('message', message => {
    
    // Forces the bot to return immediately when the message doesn't contain the specified prefix, which saves resources;
    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }    

    // Kommentert ut pga ukjent bug (09.08.20) som hindrer boten i å svare på meldinger når denne delen er implementert;
    /*
    if(command.args && !args.length) {
        var reply = `You didn't provide any arguments, ${message.author}!`;

        if(usage == true) {
            if(command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }
        }

        message.channel.send(reply);
    }
    */

    // This enters a command into an array of commands recently used, to limit spam and so forth;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    // Just retrieves a variable with the time as of right now;
    const now = Date.now();

    // Retrieves the timestamp of a cooldown recently used and the author who used it;
    const timestamps = cooldowns.get(command.name);

    // Sets the cooldown amount in seconds from milliseconds;
    // First checks if the cooldown amount has been specified in the command file, if not the cooldown defaults to 3 seconds;
    const cooldownAmount = (command.cooldown || 3) * 1000;

    // Checks if the author recently used the command, and sets the expirationtime;
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        // Checks if the command can be used again by the author, meaning that the expiration time has expired;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) ;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more milliseconds before using the \`${command.name}\` command again!`);
        }
    }

    // Just to make sure the author ID of a used command gets deleted from the cooldown array after time has expired;
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // Tries to execute the command;
    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command!");
    }
    
});