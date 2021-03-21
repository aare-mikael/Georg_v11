module.exports = (client, instance) => {
    
    // Eventlistener for whenever the bot joins a new server;
    client.on('guildCreate', joinedGuild => {

    let defaultChannel = "";
    joinedGuild.channels.cache.forEach((channel) => {
        if(channel.type == "text" && defaultChannel == "") {
            if(channel.permissionsFor(joinedGuild.me).has("SEND_MESSAGES")) {
              defaultChannel = channel;
            }
        }
    })
    const embed = require('../utilities/GuildJoinEmbed');

    defaultChannel.send("Hello, I'm Georg!");
    defaultChannel.send(embed());

    });
}