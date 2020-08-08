const Discord = require('discord.js');
const client = new Discord.Client();

// Hide at all costs;
client.login('NoneOfYourBusiness');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('with your heart');
});

client.on('message', message => {
    if(message.content === 'test') {
        message.channel.send('test working');
    }
})


