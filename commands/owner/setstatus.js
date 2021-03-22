module.exports = {
    name: 'setstatus',
    description: "Sets my status, but only my maker can use this!",
    category: "Private",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        if (!args) {
            message.channel.send('The available statuses are; "online", "idle", "dnd" and "invisible"!');
            return;
        }
        
        client.user.setStatus(args);

    },
  }    
  