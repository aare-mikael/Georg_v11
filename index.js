const Discord = require('discord.js');
const client = new Discord.Client();

// Hide at all costs;
client.login('NzQxNzAzOTIxODc3MTIzMTY0.Xy7bmw.LU22DJvzCgb2ixSkOpFARHW8nqE');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('with your heart');
});

client.on('message', message => {
    if(message.content === 'test') {
        message.channel.send('test working');
    }
})

