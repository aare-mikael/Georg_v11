module.exports = {
    name: 'setstatus',
    description: "Sets my status, but only my maker can use this!",
    category: "Private",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        if (!args[0]) {
            message.channel.send('The available statuses are; "online", "idle", "dnd" and "invisible"!');
        }

        let filter = m => (m.author.id === message.author.id); 
        let collectedStatus = await message.channel.awaitMessages(filter, { max: 1 });
        let status = collectedStatus.first().content;
        
        client.user.setPresence({ status: status });

    },
  }    
  