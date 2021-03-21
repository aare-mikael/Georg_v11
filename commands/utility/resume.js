module.exports = {
	name: 'resume',
    description: 'Resume command.',
    category: 'Voice',
	callback: async ({ message, args, text, client, prefix, instance, interaction }) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}
};