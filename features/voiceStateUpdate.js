const mongo = require('../utilities/mongoutilities/mongo');
const mongoose = require('mongoose');
const discordUsers = require('../mongoschemas/discordUsers');

module.exports = (client) => {

    // Makes the bot pay attention to whenever somebody joins a new channel;
    client.on('voiceStateUpdate', async (oldState, newState) => {

        const georg = '741703921877123164';

        const team10Discord = '612947002853949458';
        const georgland = '773672843576606721';
        const DilfNoobhouse = '634849156179165222';

        // if (newState.channel.members.filter(m => m.user.id == "123456789")) {
        //     console.log("User 123456789 is in the channel");
        // } else {
        //     console.log("User 123456789 is NOT in the channel");
        // }

        if (newState.guild.voiceConnection) return;

        // Variable names should tell you what this does;
        var newserver = newState.guild.id.toString();
        var oldserver = oldState.guild.id.toString();

        // Collects the id of the person joining;
        const newPerson = newState.member.id.toString();

        var oldChannel = oldState.channelID;
        var newChannel = newState.channelID;
        var voiceChannel = newState.channel;

        // checks if Georg is currently playing any sound in the relevant guild, and stopping the introSound if so;
        const serverQueue = newState.client.queue.get(newState.guild.id);

        // Checks if the new channel is the same as the old, in case someone mutes, unmutes, deafens and so on;
        if (oldChannel != newChannel) {
            if (newPerson == georg) {
                return;
            } else if (serverQueue) {
                return;
            } else if (voiceChannel == null || undefined) {
                return;
            } 
            else {

                // bruk mongodb til å hente ut introlink og spill av

                // om han ikkje finns, spill av default lyd

                await mongo().then(async (mongoose) => {
                    try {
                        const result = await discordUsers.findOne({
                            id: newPerson,
                        })
                        console.log("result.user: " + result.user);
                        console.log("Newstate.member: " + newState.member);

                        if ((result == undefined || null) || (result.introSound == undefined || null)) {
                            const sound = 'https://www.myinstants.com/media/sounds/tf_nemesis.mp3';

                            voiceChannel.join().then(connection => {
                                const dispatcher = connection.play(sound);
                                dispatcher.on('finish', () => voiceChannel.leave());
                            })
                            return;
                        }

                        const sound = result.introSound;
                        voiceChannel.join().then(connection => {
                            const dispatcher = connection.play(sound);
                            dispatcher.on('finish', () => voiceChannel.leave());
                        })

                        if (newserver == (team10Discord || georgland || DilfNoobhouse)) {
                            // Skriv funksjoner for random lengde på timeout og random lyd av Georg ved bruk av voiceStateDilfNoobhouse!
                        }

                        return;

                    } finally {
                        mongoose.connection.close();
                    }
                })
            }
        }
    })
}

module.exports.config = {
    displayName: "Georg's database",
    dbName: 'Georg-DB',
    loadDBfirst: true,
}