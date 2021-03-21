const embed = require('../../utilities/CustomsoundEmbed');


module.exports = {
	name: 'customsound2',
	description: "Choose a sound you want to play when you enter a voice channel.",
        category: "Voice",
	callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
        
                var name = message.author.tag;
                console.log(name);

                var id = message.author.id;
                console.log(id);

                if (!args) {
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