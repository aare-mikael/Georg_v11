module.exports = {
	name: 'customsound',
	description: "Choose a sound you want to play when you enter a voice channel.",
	cooldown: 5,
	args: true,
	execute(message, args) {

//        const filter = response => {
//            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
//       };



        message.channel.send(`Your custom intro sound is now ${args[0]}`);

        

        /*
        var voiceChannel = message.member.voice.channel;
 

        voiceChannel.join().then(connection => {
        const dispatcher = connection.play(`${m.content}`);
        dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
        */
	},
};