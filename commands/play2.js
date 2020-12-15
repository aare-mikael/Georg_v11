/*


const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require('scrape-youtube').default;
const path = require('path');
const embed = require(path.join(__dirname, '..', '/utilities', 'YoutubeEmbed.js'));

module.exports = {
	name: 'play2',
    description: 'Plays the audio of either a youtube url or result upon search in Youtube, depending on your input.',
    usage: 'url OR search words + volume as the last argument',
    cooldown: 5,
    category: "Voice",
	args: true,
//	usage: "<user> <role>",
	execute(message, args) {
        console.log(args);
        if (message.author.bot) {
            message.channel.send ("I can't play links sent by discord bots!");
            console.log(message.author.username);
            return;
        }

        let vol;

        if(!args[args.length - 1].match(/\d+.+\d/)) {
            vol = 0.1;
        } else if (args[args.length-1] == 1) {
            vol = 1;
        } else if(args[args.length-1] == NaN) {
            vol = 0.1;
        } else {
            vol = Number(args[args.length - 1]);
            args.pop();
        }

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
            return;
        }

        if(voiceChannel == undefined || voiceChannel == null) return;

//        message.channel.bulkDelete(1);

        message.reply("we here at Georg Music will now play your requested audio at volume " + vol +   ": ");

        if ( message.content.includes("youtube.com/watch" )) {

            const search = args[0];

            youtube.searchOne(search, { type: 'video' }).then(results => {
                var link = results.link;

                const stream = ytdl(link, { filter: 'audioonly' });
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(stream, { volume: vol });

                    message.channel.send(embed(message, results));

                    dispatcher.on("finish", end => message.member.voice.channel.leave());
                }).catch(err => console.log(err));
            })


            /*

            voiceChannel.join().then(connection => {
                const link = args.join(' ');
                const stream = ytdl(link, { filter: 'audioonly', });
                const dispatcher = connection.play(stream, { volume: vol } );
                dispatcher.on('finish', () => voiceChannel.leave());
            }).catch(err => console.log(err));

            

        } else {

            search = args.join(' ');

            youtube.searchOne(search, { type: 'video' }).then(results => {
//                console.log(results);
                var link = results.link;

                const stream = ytdl(link, { volume: vol, filter: 'audioonly' });
                voiceChannel.join().then(connection => {
                const dispatcher = connection.play(stream, { volume: vol });

                message.channel.send(embed(message, results));

                dispatcher.on("finish", end => message.member.voice.channel.leave());
                }).catch(err => console.log(err));
            });
        }
	},
};

*/
/*

const ytdl = require('discord-ytdl-core');
const Discord = require('discord.js');
const ApiKey = process.env.YoutubeApiKey;

module.exports = {
	name: 'play',
    description: 'Searches for Youtube videos',
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

        const serverQueue = message.client.queue.get(message.guild.id);




        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel for me to join and play this video. Join a voice channel and try again!");
            return;
        }

        if(voiceChannel == undefined || voiceChannel == null) return;

        const search = require('youtube-search');
        const opts = {
            maxResults: 25,
            key: ApiKey,
            type: 'video'
        };

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play("https://www.myinstants.com/media/sounds/emptyish-sound.mp3");
            dispatcher.destroy;
        });

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
                    description: titles.join("\n"),
                    color: '#6f4c78'
                }
            }).catch(err => console.log(err));

            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= YoutubeResults.length; 
            
            let collected = await message.channel.awaitMessages(filter, { max: 1 });

            let selected = YoutubeResults[collected.first().content - 1];

            var videoUrl = selected.link;

            embed = new Discord.MessageEmbed()
                .setColor('#6f4c78')
                .setDescription(`${selected.description}`)
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
        };

        var vol = 0.3;

        const stream = ytdl(videoUrl, {
            filter: 'audioonly', 
            opusEncoded: true, 
            encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
        });
        
        voiceChannel.join().then(connection => {
            dispatcher = connection.play(stream, { 
                volume: 1,
                type: "opus"
            });
            dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
    },
};

*/