module.exports = {
	name: 'stop',
    description: 'Stop command for the music playing.',
    category: 'Voice',
	callback: async ({ message, args, text, client, prefix, instance, interaction }) => {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        
        message.channel.send("🎶 **Stopping all music and deleting queue!**")
	}
};