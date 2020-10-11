const Discord = require('discord.js');

module.exports = function embed(message, obj) {

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle('A random Twitter status from our lord and saviour!')
        .setAuthor('Georg', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .addFields(
            { name: "--------------------", value: obj.value },
            { name: "--------------------", value: obj.appeared_at },
            { name: "--------------------", value: obj._embedded.source[0].url },
        ) 
        .setTimestamp() 
        .setFooter('Georg™ ©2020', 'https://i.ibb.co/8sbpxpw/GEORG.png');

    return Embed;
}