const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const ApiKey = process.env.YoutubeApiKey;
const { Util } = require('discord.js');

module.exports = {
	name: 'play',
    description: 'Searches for Youtube videos',
    category: "Voice",
	args: true,
//	usage: "<user> <role>",
	async execute(message, args, client) {
        if (message.author.bot) {
            message.channel.send ("I can't play links sent by discord bots!");
            console.log(message.author.username);
            return;
        }

        const { channel } = message.member.voice;

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel for me to join and play this video. Join a voice channel and try again!");
            return;
        }

        if(voiceChannel == undefined || voiceChannel == null) return;

        const search = require('youtube-search');
        const opts = {
            maxResults: 10,
            key: ApiKey,
            type: 'video'
        };

        let results = await search(args.join(' '), opts).catch(err => console.log("Noke skjedde"));

/*        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }

        sleep(1000);
*/

        let titles;
        let YoutubeResults;

        if( results ) {
            
            YoutubeResults = results.results;
            let i = 0;
            titles = YoutubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });

            let embed = new Discord.MessageEmbed()
            .setColor('#6f4c78')
            .setDescription(titles.join("\n"))
            .setTitle("I found these videos based on your message, which one do you want?");
            // Youtube search by Georg™ ©2020 --- //
            let embedMsg = await message.channel.send(embed);
        
            let filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= YoutubeResults.length; 
            let collected = await message.channel.awaitMessages(filter, { max: 1 });
            let selected = YoutubeResults[collected.first().content - 1];
            var videoUrl = selected.link;

            console.log(videoUrl);

            const serverQueue = message.client.queue.get(message.guild.id);
            const songInfo = await ytdl.getInfo(videoUrl.replace(/<(.+)>/g, '$1'));
            const song = {
                id: songInfo.videoDetails.video_id,
                title: Util.escapeMarkdown(songInfo.videoDetails.title),
                url: songInfo.videoDetails.video_url
            };
    
            if(serverQueue) {
                serverQueue.songs.push(song);
                return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
            }

            console.log(message.author.username + " requested: " + `${song.title}`);
    
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: channel,
                connection: null,
                songs: [],
                volume: 2,
                playing: true
            };
            message.client.queue.set(message.guild.id, queueConstruct);
            queueConstruct.songs.push(song);
            
            const play = async song => {
                const queue = message.client.queue.get(message.guild.id);
                if (!song) {
                    queue.voiceChannel.leave();
                    message.client.queue.delete(message.guild.id);
                    return;
                }
                
                const dispatcher = queue.connection.play(ytdl(song.url))
                    .on('finish', () => {
                        queue.songs.shift();
                        play(queue.songs[0]);
                    })
                    .on('error', error => console.error(error));
                dispatcher.setVolumeLogarithmic(queue.volume / 5);
                queue.textChannel.send(`🎶 Starting: **${song.title}**`);

        }


        try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.client.queue.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}

        // var vol = 0.3;

        // const stream = ytdl(videoUrl, {
        //     filter: 'audioonly', 
        //     opusEncoded: true, 
        //     encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
        // });
        
        // voiceChannel.join().then(connection => {
        //     dispatcher = connection.play(stream, { 
        //         volume: 1,
        //         type: "opus"
        //     });
        //     dispatcher.on("finish", end => message.member.voice.channel.leave());
        // }).catch(err => console.log(err));
    
            
            };
    

    }
};