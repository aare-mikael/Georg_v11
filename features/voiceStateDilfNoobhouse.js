const mongo = require('../utilities/mongoutilities/mongo');
const mongoose = require('mongoose');
const discordUsers = require('../mongoschemas/discordUsers');
const randomVoiceJoin = require('../utilities/randomVoiceJoin');

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

        if (newserver != (DilfNoobhouse || team10Discord || georgland) ) return;

        // checks if Georg is currently playing any sound in the relevant guild, and stopping the introSound if so;
        const serverQueue = newState.client.queue.get(newState.guild.id);
        
        if (serverQueue) {
            return;
        } else {
            setTimeout(randomVoiceJoin, 10000);
        }
    })
}

module.exports.config = {
    displayName: "Georg's database",
    dbName: 'Georg-DB',
    loadDBfirst: true,
}