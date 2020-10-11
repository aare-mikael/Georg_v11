const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = function embed() {

    const Embed = new Discord.MessageEmbed()
        .setColor('#6f4c78')
        .setTitle('This is a "How to" on how to use my customsound-command!')
        .setAuthor('Georg', 'https://i.ibb.co/8sbpxpw/GEORG.png', 'https://discord.com/api/oauth2/authorize?client_id=741703921877123164&permissions=2147483639&scope=bot')
        .addFields(
            { name: "--------------------", value: 'I have four subcommands:' },
            { name: "--------------------", value: 'The first is **add**, and is used like this: "customsound add **yourlinkhere.mp4**"' },
            { name: "--------------------", value: 'The second is **delete**, and is used like this: "customsound delete"' },
            { name: "--------------------", value: 'The third is **toggleon**, and is used like this: "customsound toggleon"' },
            { name: "--------------------", value: 'The fourth is **toggleoff**, and is used like this: "customsound toggleoff"' },
            { name: "--------------------", value: 'The names should make it clear what each command does, but in case you\'re in doubt: ' },
            { name: "--------------------", value: '**add** is used for adding a intro-sound'},
            { name: "--------------------", value: '**delete** is used for deleting your intro-sound'},
            { name: "--------------------", value: '**toggleon** is used for turning on your intro-sound'},
            { name: "--------------------", value: '**toggleoff** is used for turning off your intro-sound'},
        ) 
        .setTimestamp() 
        .setFooter('Georg™ ©2020', 'https://i.ibb.co/8sbpxpw/GEORG.png');

    return Embed;
}