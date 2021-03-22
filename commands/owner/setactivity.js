module.exports = {
    name: 'setactivity',
    description: "Sets my activity, but only my maker can use this!",
    category: "Private",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        if (!args[0]) {
            message.channel.send('Available types are; "PLAYING", "STREAMING", "LISTENING", "WATCHING", and "COMPETING".');
            return;
        }

        let filter = m => (m.author.id === message.author.id); 
        let collectedActivity = await message.channel.awaitMessages(filter, { max: 1 });
        
        let filter2 = m => (m.author.id === message.author.id);
        let collectedType = await message.channel.awaitMessages(filter2, { max: 1 });

        client.user.setPresence({
            activity: {
                name: collectedActivity,
                type: collectedType,
            }
        });
    },
  }    
  