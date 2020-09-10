const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require('scrape-youtube').default;
const path = require('path');
const embed = require(path.join(__dirname, '..', '/utilities', 'YoutubeEmbed.js'));

module.exports = {
	name: 'play',
    description: 'Plays the audio of either a youtube url or result upon search in Youtube, depending on your input.',
    usage: 'url OR search words + volume as the last argument',
    cooldown: 10,
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
        } else {
            vol = Number(args[args.length - 1]);
            args.pop();
        }

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
            return;
        }

        message.channel.bulkDelete(1);

        if ( message.content.includes("youtube.com/watch" )) {

            voiceChannel.join().then(connection => {
                const link = args.join(' ');
                const stream = ytdl(link, { filter: 'audioonly', });
                const dispatcher = connection.play(stream, { volume: vol } );
                dispatcher.on('finish', () => voiceChannel.leave());
            }).catch(err => console.log(err));

        } else {

            const search = args.join(' ');

            youtube.searchOne(search, { type: 'video' }).then(results => {
                console.log(results);
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