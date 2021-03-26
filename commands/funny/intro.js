const mongo = require('../../utilities/mongoutilities/mongo');
const mongoose = require('mongoose');

module.exports = {
    name: 'intro',
    description: "Joins voice channel and plays your introsound",
    category: "Funny",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        // checks if Georg is currently playing any sound in the relevant guild, and stopping the introSound if so;
        const serverQueue = message.client.queue.get(message.guild.id);

        const { voice } = message.member;

        if (!voice.channelID) {
            message.channel.send('Sorry, but you have to be in a voicechannel to use this command!');
        }

        if (serverQueue) {
            message.channel.send("This function doesn't work when there is a song playing, sorry!");
            return;
        } else {

            await mongo().then(async (mongoose) => {
                try {
                    const result = await discordUsers.findOne({
                        id: message.author.id,
                    })
                    console.log(result);

                    if (result.introSound == undefined || null) {
                        message.channel.send(`You have to define your own introsound first! Try writing ${prefix}customsound!`);
                        return;
                    }

                    const sound = result.introSound;
                    voiceChannel.join().then(connection => {
                        const dispatcher = connection.play(sound);
                        dispatcher.on('finish', () => voiceChannel.leave());
                    })
                    return;

                } finally {
                    mongoose.connection.close();
                }
            })
        }
    },
};