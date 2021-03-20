module.exports = (client) => {
    
    const Discord = require('discord.js');

    // fs is Node's native file system module;
    const fs = require('fs');
    const { readdirSync } = require('fs');

    // Requires the customsound array, so the bot knows which sound to play when a user joins voice;
    client.intro = new Discord.Collection();
    const introFiles = fs.readdirSync('../customsounds').filter(file => file.endsWith('.js'));
    for (const file of introFiles) {
        // Requires all files in intro;
        const intro = require('../customsounds/' + file);
        // Set a new item in the collection with the key as the commandname and the value as the exported module;
        client.intro.set(intro.id, intro);
    }

    // Makes the bot pay attention to whenever somebody joins a new channel;
    client.on('voiceStateUpdate', (oldState, newState) => {

        const georg = '741703921877123164';

        const team10Discord = '612947002853949458';
        const georgland = '773672843576606721';

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

        /*
        if (voiceChannel = undefined || voiceChannel == null) {
            if(oldserver == team10Discord) {
                
            }
        }
        */

        // checks if Georg is currently playing any sound in the relevant guild, and stopping the introSound if so;
    const serverQueue = newState.client.queue.get(newState.guild.id);

        // Checks if the new channel is the same as the old, in case someone mutes, unmutes, deafens and so on;
        if (oldChannel != newChannel) {
            if (newPerson == georg) {
                return;
            } else if (serverQueue) {
                return;
            } else {
                // Just a player for the introsound, for aesthetic purposes;
                var name = newState.member.id.toString();
                var sound = client.intro.get(name);

                // Checks if the person joining has an intro sound, and returns if not to stop Georg from crashing :)
                if (sound == undefined) {

                    var link = "https://www.myinstants.com/media/sounds/tf_nemesis.mp3";

                    introSound(newState, link, client);
                    return;
                }
                var link = sound.url;
                introSound(newState, link, client);
            }
        }
    })
}