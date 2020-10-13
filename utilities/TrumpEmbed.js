const Discord = require('discord.js');

module.exports = function embed(message, obj) {

    let scuffedDate = obj.appeared_at;

    let Date = document.getElementById("demo").innerHTML = scuffedDate;

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle('A random Twitter status from our lord and saviour!')
        .setAuthor('Georg', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .addFields(
            { name: "Tweet:", value: obj.value },
            { name: "Tweeted at:", value: Date },
            { name: "Url", value: obj._embedded.source[0].url },
        ) 
        .setTimestamp() 
        .setFooter('Georg™ ©2020', 'https://i.ibb.co/8sbpxpw/GEORG.png');

    return Embed;
}