//INVITE LINK FOR THE BOT;
//https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot

// fs is Node's native file system module;
const fs = require('fs');
const { readdirSync } = require('fs');

// To get file paths of different classes and objects;
var path = require("path");

// Forces the use of env;
const env = require('dotenv').config()

// Requires the discord.js module, which this bot is built by;
const Discord = require('discord.js');

// const GeorgBot = require('./struct/Client');

const WOKCommands = require('wokcommands')
require('dotenv').config()

// Requires the ytdl-core module, which is used for playing yotube audio in voice channels;
const ytdl = require('ytdl-core');

const introSound = require('./utilities/introPlayer');

// Requires the prefix specified in config.json, to avoid issues where a command name is randomly said without meaning to invoke the command;
// const { prefix } = require('./config.json');
// const { cooldown } = require('./commands/ping');

// Requires the token to log in, from a file that won't get pushed to github;
const token = process.env.token;

// Creates a new Discord client, essentially this is the bot;
// const client = new Discord.Client();
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION'],
});



// Music queue;
this.queue = new Map();

// // Requires the customsound array, so the bot knows which sound to play when a user joins voice;
// client.intro = new Discord.Collection();
// const introFiles = fs.readdirSync('./customsounds').filter(file => file.endsWith('.js'));
// for (const file of introFiles) {
//     // Requires all files in intro;
//     const intro = require('./customsounds/' + file);
//     // Set a new item in the collection with the key as the commandname and the value as the exported module;
//     client.intro.set(intro.id, intro);
// }

// Creates a collection with all the commands;
// client.commands = new Discord.Collection();

// Declares an array which contains all files in commands which ends in .js, which is Javascript-files;
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//     // Requires all files in commands;
//     const command = require(`./commands/${file}`);

//     // Set a new item in the collection with the key as the commandname and the value as the exported module;
//     client.commands.set(command.name, command);
// }

// const cooldowns = new Discord.Collection();

// Hide your token at all costs;
client.login(process.env.token);

// When client is ready, this code will be run and will only trigger once after logging in;
client.on('ready', () => {
    console.log('I solemnly swear I am up to no good.');
    
    client.user.setStatus('online');
    
    client.user.setActivity('channel activity', { type: 'WATCHING' });

    const messagesPath = "";

    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features',
        messagesPath,
        showWarns: true,
        dbOptions,
        disabledDefaultCommands
    })
    .setMongoPath(process.env.mongoPath)
    .setDefaultPrefix('-')
    .setColor(0x6f4c78)
    .setCategorySettings([
        {
            name: 'text',
            emoji: '⌨️'
        },
        {
            name: 'voice',
            emoji: '🎧'
        },
        {
            name: 'utility',
            emoji: '🏗️'
        }
    ])
});


// Preventing full restart upon an error;
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
// client.on("debug", (e) => console.info(e));

const mongo = require('./utilities/mongoutilities/mongo');
const customsound = require('./commands/customsound');

const discordUsers = require('./mongoschemas/discordUsers');

const connectToMongoDB = require('./utilities/mongoutilities/connectToMongoDB');
const insertUser = require('./utilities/mongoutilities/insertUser');

connectToMongoDB();

// // Eventlistener for whenever the bot joins a new server;
// client.on('guildCreate', joinedGuild => {

//     let defaultChannel = "";
//     joinedGuild.channels.cache.forEach((channel) => {
//         if(channel.type == "text" && defaultChannel == "") {
//             if(channel.permissionsFor(joinedGuild.me).has("SEND_MESSAGES")) {
//               defaultChannel = channel;
//             }
//         }
//     })
//     const embed = require(path.join(__dirname, '/utilities', 'GuildJoinEmbed.js'));

//     defaultChannel.send("Hello, I'm Georg!");
//     defaultChannel.send(embed());

// });
/*

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

  */


// // Makes the bot pay attention to whenever somebody joins a new channel;
// client.on('voiceStateUpdate', (oldState, newState) => {

//     const georg = '741703921877123164';

//     const team10Discord = '612947002853949458';
//     const georgland = '773672843576606721';

//     // if (newState.channel.members.filter(m => m.user.id == "123456789")) {
//     //     console.log("User 123456789 is in the channel");
//     // } else {
//     //     console.log("User 123456789 is NOT in the channel");
//     // }

//     if (newState.guild.voiceConnection) return;

//     // Variable names should tell you what this does;
//     var newserver = newState.guild.id.toString();
//     var oldserver = oldState.guild.id.toString();

//     // Collects the id of the person joining;
//     const newPerson = newState.member.id.toString();

//     var oldChannel = oldState.channelID;
//     var newChannel = newState.channelID;
//     var voiceChannel = newState.channel;

//     /*
//     if (voiceChannel = undefined || voiceChannel == null) {
//         if(oldserver == team10Discord) {
            
//         }
//     }
//     */

//     // checks if Georg is currently playing any sound in the relevant guild, and stopping the introSound if so;
//    const serverQueue = newState.client.queue.get(newState.guild.id);

//     // Checks if the new channel is the same as the old, in case someone mutes, unmutes, deafens and so on;
//     if (oldChannel != newChannel) {
//         if (newPerson == georg) {
//             return;
//         } else if (serverQueue) {
//             return;
//         } else {
//             // Just a player for the introsound, for aesthetic purposes;
//             var name = newState.member.id.toString();
//             var sound = client.intro.get(name);

//             // Checks if the person joining has an intro sound, and returns if not to stop Georg from crashing :)
//             if (sound == undefined) {

//                 var link = "https://www.myinstants.com/media/sounds/tf_nemesis.mp3";

//                 introSound(newState, link, client);
//                 return;
//             }
//             var link = sound.url;
//             introSound(newState, link, client);
//         }
//     }
// })

// // Makes the bot react when a textmessage pops into a channel it has access to;
// client.on('message', async message => {

// //    insertUser(message);

//     // Forces the bot to return immediately when the message doesn't contain the specified prefix, which saves resources;
//     if (!message.content.startsWith(prefix)) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const commandName = args.shift().toLowerCase();

//     const command = client.commands.get(commandName)

//     // if (command.guildOnly && message.channel.type !== 'text') {
//     //     return message.reply('I can\'t execute that command inside DMs!');
//     // }    

//     // This enters a command into an array of commands recently used, to limit spam and so forth;
//     if (!cooldowns.has(command.name)) {
//         cooldowns.set(command.name, new Discord.Collection());
//     }

//     // Just retrieves a variable with the time as of right now;
//     const now = Date.now();

//     // Retrieves the timestamp of a cooldown recently used and the author who used it;
//     const timestamps = cooldowns.get(command.name);

//     // Sets the cooldown amount in seconds from milliseconds;
//     // First checks if the cooldown amount has been specified in the command file, if not the cooldown defaults to 3 seconds;
//     const cooldownAmount = (command.cooldown || 3) * 1000;

//     // Checks if the author recently used the command, and sets the expirationtime;
//     if (timestamps.has(message.author.id)) {
//         const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

//         // Checks if the command can be used again by the author, meaning that the expiration time has expired;
//         if (now < expirationTime) {
//             const timeLeft = (expirationTime - now);
//             const timeLeftSec = timeLeft / 1000;
//             return message.reply(`please wait ${timeLeftSec.toFixed(1)} more seconds before using the \`${command.name}\` command again!`);
//         }
//     }

//     // Just to make sure the author ID of a used command gets deleted from the cooldown array after time has expired;
//     timestamps.set(message.author.id, now);
//     setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

//     // Tries to execute the command;
//     try {
//         command.execute(message, args, client)
//     } catch (error) {
//         console.error(error);
//         message.channel.send("There was an error trying to execute that command!");
//     }
    
// });