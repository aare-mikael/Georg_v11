const Discord = require('discord.js');

module.exports = function embed() {

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle('Hello, this is a "How to" on how I work and can help you in your server!')
        .setAuthor('Georg', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .setDescription(`My prefix is this: ${prefix}`)
        .addFields(
            { name: 'My personal recommendation:', value: 'The first command you use should be the **help** command!' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        ) 
//        .setImage(results.thumbnail)
        .setTimestamp() 
        .setFooter('Georg™ ©2020', 'https://i.imgur.com/wSTFkRM.png');

    return Embed;
}