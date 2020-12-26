var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', 'customsounds/'));
const introSoundAdd = require(path.join(__dirname, '..', 'utilities/introSoundAdd.js'));
const introSoundDel = require(path.join(__dirname, '..', 'utilities/introSoundDel.js'));

module.exports = {
	name: 'customsound',
	description: "Choose a sound you want to play when you enter a voice channel.",
        cooldown: 5,
        category: "Voice",
	args: true,
	execute(message, args, client) {
        
                var name = message.author.tag;

                const embed = require(path.join(__dirname, '../utilities', 'CustomsoundEmbed.js'));

                if (!args[0]) {

                        message.channel.send(embed(message, args));

                }                        

                switch(args[0]){

                        case 'add':
                                var url = args[1]
                                if(fs.existsSync(usersPath + name + ".js")){
                                var intro = require(path.join(usersPath + name +".js"))
                                if( intro.id !== message.author.id ){
                                message.channel.send("You can't change other users intro-sound!")
                                return
                                } else {
                                  introSoundDel(client, message);
                                  introSoundAdd(client, message, name, url, true)
                                  message.reply('if you had an intro sound previously, you have to delete it first, and then add your new sound! Your intro-sound is saved, and available for use!')
                                }
                                } else {
                                  introSoundAdd(client, message, name, url, true)
                                  message.reply("if you had an intro sound previously, you have to delete it first, and then add your new sound! Your intro-sound is saved, and available for use!")
                                }
                        break;

                        case 'delete':
                                if(fs.existsSync(usersPath + name + ".js")){
                                        introSoundDel(client, message);
                                        }
                                        message.reply("your sound is deleted.")
                        break;

                        case 'toggleon':
                        
                                if(fs.existsSync(usersPath + name + ".js")){
                                        var intro = require(path.join(usersPath + name +".js"))     
                                        introSoundDel(client, message);
                                        introSoundAdd(client, message, name, url, true)
                                        message.reply("your sound is toggled on and will play from now on.")
                                }

                        break;

                        case 'toggleoff':

                                if(fs.existsSync(usersPath + name + ".js")){
                                        var intro = require(path.join(usersPath + name +".js"))     
                                        introSoundDel(client, message);
                                        introSoundAdd(client, message, name, url, false)
                                        message.reply("your sound is toggled off, and will not play from now on.")
                                }

                        }
	},
};