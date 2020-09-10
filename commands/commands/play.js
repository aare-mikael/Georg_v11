const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
    description: 'Plays the audio of a youtube-url you provide.',
    usage: 'url',
	cooldown: 10,
	args: true,
//	usage: "<user> <role>",
	execute(message, args) {
        if (message.author.bot) {
            message.channel.send ("I can't play links sent by discord bots!");
            return;
        }

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send("You have to be in a voice channel to make this command work. Join a voice channel and try again!");
            return;
        }

        message.channel.bulkDelete(1);

        voiceChannel.join().then(connection => {
            const link = args.join(' ');
            const stream = ytdl(link, { volume: 0.5, filter: 'audioonly', });
            const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => voiceChannel.leave());
        }).catch(err => console.log(err));
	},
};