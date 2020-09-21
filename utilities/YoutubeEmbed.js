const Discord = require('discord.js');

module.exports = function embed(message, results) {

    let rMin = Math.floor(results.duration / 60);
    let rSek = results.duration % 60;
    let tid = (rMin + ":" + rSek);

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle(results.title)
        .setURL(results.link)
        .setAuthor('Georg Music', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .setDescription(results.description)
        .setThumbnail(results.thumbnail)
/*        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        ) */
        .addField('Duration', tid, true)
//        .setImage(results.thumbnail)
        .setTimestamp() 
        .setFooter('Georg™ ©2020', 'https://i.ibb.co/8sbpxpw/GEORG.png');

    return Embed;
}