module.exports = {
	name: 'queue',
    description: 'Queue command.',
    category: 'Voice',
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	}
};