const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require('youtube-api');
const path = require('path');
const embed = require(path.join(__dirname, '..', '/utilities', 'YoutubeEmbed.js'));
const Discord = require('discord.js');
const ApiKey = require(path.join(__dirname, '..', 'process.env.YoutubeApiKey'));

module.exports = {
	name: 'play',
    description: 'Plays the audio of either a youtube url or result upon search in Youtube, depending on your input.',
    usage: 'url OR search words + volume as the last argument',
    cooldown: 5,
    category: "Voice",
	args: true,
//	usage: "<user> <role>",
	async execute(message, args, client) {
        if (message.author.bot) {
            message.channel.send ("I can't play links sent by discord bots!");
            console.log(message.author.username);
            return;
        }

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel for me to join and play this video. Join a voice channel and try again!");
            return;
        }

        if(voiceChannel == undefined || voiceChannel == null) return;

        const search = require('youtube-search');
        const opts = {
            maxResults: 25,
            key: process.env.YoutubeApiKey,
            type: 'video'
        };

        console.log(ApiKey);

        let embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setDescription("Please enter a search query, the more detailed the higher the chance of finding the correct video.")
        .setTitle("Youtube search by Georg™ ©2020");
        let embedMsg = await message.channel.send(embed);

        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });

        let results = await search(query.first().content, opts).catch(err => console.log(err));

        if( results ) {
            let YoutubeResults = results.results;
            let i = 0;
            let titles = YoutubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            message.channel.send({
                embed: {
                    title: 'Select which video you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= YoutubeResults.length; 
            
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });

            let selected = YoutubeResults[collected.first().content - 1];

//            var videoUrl = selected.link;

            embed = new Discord.MessageEmbed()
                .setColor('#6f4c78')
                .setDescription(`${selected.description}`)
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
        }

        /*

        let vol = 0.1;

        message.reply("we here at Georg Music will now play your requested audio at volume " + vol +   ": ");

        const stream = ytdl(LINK, { filter: 'audioonly' });
        
        voiceChannel.join().then(connection => {
        
            const dispatcher = connection.play(stream, { volume: vol });
            dispatcher.on("finish", end => message.member.voice.channel.leave());
            }).catch(err => console.log(err));

            */
    },
    
};