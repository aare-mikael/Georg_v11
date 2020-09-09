// fs is Node's native file system module;
const fs = require('fs');

// Forces the use of env;
const env = require('dotenv').config()

// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');


// Requires the ytdl-core module, which is used for playing yotube audio in voice channels;
const ytdl = require('ytdl-core');


// Requires the prefix specified in config.json, to avoid issues where a command name is randomly said without meaning to invoke the command;
const { prefix } = require('./config.json');
const { cooldown } = require('./commands/ping');

// Requires the token to log in, from a file that won't get pushed to github;
const token = process.env.token;

// Requires the customsound array, so the bot knows which sound to play when a user joins voice;
const intro = require('./commands/customsound');

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
client.login(process.env.token);

// When client is ready, this code will be run and will only trigger once after logging in;
client.once('ready', () => {
    console.log('I solemnly swear I am up to no good.');
    client.user.setActivity('your heartbeat', { type: 'LISTENING' });
//    client.user.setActivity('with your heart');
});

// Makes the bot pay attention to whenever somebody joins a new channel;
client.on('voiceStateUpdate', (oldState, newState) => {

//    console.log(newState.guild.voiceStates);
//    console.log(newState.VoiceStateManager);

    const trashbot2 = '741703921877123164';

    if (newState.guild.voiceConnection) return;

    // Variable names should tell you what this does;
    var newserver = newState.guild.id.toString();
    var oldserver = oldState.guild.id.toString();

    // Collects the id of the person joining;
    const newPerson = newState.member.id.toString();

    if(newPerson == '741703921877123164') return;

    var oldChannel = oldState.channelID;
    var newChannel = newState.channelID;
    var voiceChannel = newState.channel;

    // Checks if the new channel is the same as the old, in case a bug happens;
    if (oldChannel != newChannel) {

        // If newChannel is either null or undefined, the person disconnected from voice;
        if (newChannel != null || newChannel != undefined) {

            // Checks how many bots there are in the channel already and returns the amount;
            var bots = newState.channel.members.filter(x => x.user.bot).size;
            if (bots > 0) return;

            voiceChannel.join().then(connection => {
            dispatcher = connection.play('https://www.myinstants.com/media/sounds/challenger-approaching-super-smash-bros.mp3', { volume: 0.5 });
            dispatcher.on("finish", end => voiceChannel.leave());
            }).catch(err => console.log(err));
        }
    }
})

// Makes the bot react when a textmessage pops into a channel it has access to;
client.on('message', message => {

    // Stops Posterboy from using his tenor.com/view gifs in #whatevs;
    if(message.content.includes("tenor.com/view") && message.channel.id == "615524562959990803") {
        message.channel.bulkDelete(1);
//        message.channel.send("Tenor-gifs are not allowed in this channel!");
    }
    
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
        command.execute(message, args, client)
    } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command!");
    }
    
});