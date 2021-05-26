module.exports = {
    name: 'andreas',
    description: "Joins voice channel and plays AllByMyself.mp3",
    category: "MP3",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        const audio = 'https://www.myinstants.com/media/sounds/untitled_34.mp3';

        const { voice } = message.member;

        if (!voice.channelID) {
            message.channel.send('Sorry, but you have to be in a voicechannel to use this command!');
        }

        voice.channel.join().then(connection => {
            const dispatcher = connection.play(audio);
            dispatcher.on('finish', () => voice.channel.leave());
        }).catch(err => console.log(err));
    },
};