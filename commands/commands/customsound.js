module.exports = {
	name: 'customsound',
	description: "Choose a sound you want to play when you enter a voice channel.",
	cooldown: 5,
	args: true,
	execute(message, args) {

        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send("For the next 15 seconds, I'm awaiting your url.").then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected} is now your custom sound!`);
            })
            .catch(collected => {
                message.channel.send("Time's up!");
            });
        });

        /*
        var voiceChannel = message.member.voice.channel;
 

        voiceChannel.join().then(connection => {
        const dispatcher = connection.play(`${m.content}`);
        dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
        */
	},
};