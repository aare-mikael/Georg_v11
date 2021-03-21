const Discord = require('discord.js');

const mongo = require('./mongoutilities/mongo');

const welcomeSchema = require('../mongoschemas/welcomeSchema');

const { prefix } = require('../config.json');

module.exports = function embed() {

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle('This is a "How to" on how I work and can help you in your server!')
        .setAuthor('Georg', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .setDescription(`My prefix is this: "${prefix}"`)
        .addFields(
            { name: "--------------------", value: 'The first command you use should be the **help** command!' },
            { name: "--------------------", value: 'I can moderate messages, join voice and play audio clips from youtube and more!' },
            { name: "--------------------", value: 'All you have to do is use the help-command, and I will tell you more!' },
        ) 
//        .setImage(results.thumbnail)
        .setTimestamp() 
        .setFooter('Georg™ ©2021', 'https://i.ibb.co/8sbpxpw/GEORG.png');

    return Embed;
}