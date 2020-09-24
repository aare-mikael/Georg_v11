var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', '..', 'customsounds/'));
const introSoundAdd = require(path.join(__dirname, '..', '..', 'utilities\introSoundAdd.js'));
const introSoundDel = require(path.join(__dirname, '..', '..', 'utilities\introSoundDel.js'));

module.exports = {
	name: 'customsound',
	description: "Choose a sound you want to play when you enter a voice channel.",
        cooldown: 5,
        category: "Voice",
	args: true,
	execute(message, args) {
                        var name = message.author.tag
                        switch(args[0]){

                        //TODO Set custom sound
                        case 'leggtil':
                                var url = args[1]
                                if(fs.existsSync(usersPath + name + ".js")){
                                var intro = require(path.join(usersPath + name +".js"))
                                if( intro.id !== message.author.id ){
                                message.channel.send("Du kan ikke endre andres introsound!")
                                return
                                }else{
                                  introSoundDel(client, message);
                                  introSoundAdd(client, message, name, url, true)
                                  message.channel.send("introlyden din er lagret, kan brukes umiddelbart")
                                }
                                }else{
                                  introSoundAdd(client, message, name, url, true)
                                  message.channel.send("introlyden din er lagret, kan brukes umiddelbart")
                                }
                        break;

                        //TODO Delete custom sound
                        case 'slett':
                                if(fs.existsSync(usersPath + name + ".js")){
                                        introSoundDel(client, message);
                                        }
                                        message.reply("introlyden din er fjernet fra databasen.")
                        break;

                        //TODO toggle lyden
                        case 'toggle':
                        
                        break;
                        }















//        const filter = response => {
//            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
//       };

                

//        message.channel.send(`Your custom intro sound is now ${args[0]}`);
        
        

        /*
        var voiceChannel = message.member.voice.channel;
 

        voiceChannel.join().then(connection => {
        const dispatcher = connection.play(`${m.content}`);
        dispatcher.on("finish", end => message.member.voice.channel.leave());
        }).catch(err => console.log(err));
        */
	},
};