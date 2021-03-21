module.exports = {
	name: 'volume',
    description: 'Volume command.',
    category: 'Voice',
	callback: async ({ message, args, text, client, prefix, instance, interaction }) => {
		
		const { channel } = message.member.voice;

		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		
		const serverQueue = message.client.queue.get(message.guild.id);
		
		if (!serverQueue) return message.channel.send('There is nothing playing.');

		if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);

		const volume = args[0];

		const volume2 = Math.floor(Math.random() * volume);

		// Changes volume somewhere between the number specified and 0;
		serverQueue.volume = volume2

//		serverQueue.volume = args[0];

		serverQueue.connection.dispatcher.setVolumeLogarithmic(volume2/ 5);

		return message.channel.send('I set the volume to: **' + volume2 + '**');
	}
};