module.exports = {
	name: 'intro',
	description: 'Play your own intro, again!',
	category: 'Voice',
	cooldown: 5,
	execute(message, client) {
        const serverQueue = message.client.queue.get(message.guild.id);
        
		if (!serverQueue) {

            var voiceChannel = message.member.voice.channel
            var name = message.member.id.toString();
            var sound = client.intro.get(name);
            var song = sound.url;
            introSound(voiceChannel, song, client);

        } else {
            serverQueue.songs.push(song);
            return message.channel.send('Your intro has been added to the queue!');

        }
	}
};