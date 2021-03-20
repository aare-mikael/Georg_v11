module.exports = (client) => {

    // Makes the bot react when a textmessage pops into a channel it has access to;
    client.on('message', async message => {

//      insertUser(message);
    
        // Forces the bot to return immediately when the message doesn't contain the specified prefix, which saves resources;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
    
        const command = client.commands.get(commandName)
    
        // if (command.guildOnly && message.channel.type !== 'text') {
        //     return message.reply('I can\'t execute that command inside DMs!');
        // }    
    
        // This enters a command into an array of commands recently used, to limit spam and so forth;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
    
        // Just retrieves a variable with the time as of right now;
        const now = Date.now();
    
        // Retrieves the timestamp of a cooldown recently used and the author who used it;
        const timestamps = cooldowns.get(command.name);
    
        // Sets the cooldown amount in seconds from milliseconds;
        // First checks if the cooldown amount has been specified in the command file, if not the cooldown defaults to 3 seconds;
        const cooldownAmount = (command.cooldown || 3) * 1000;
    
        // Checks if the author recently used the command, and sets the expirationtime;
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
            // Checks if the command can be used again by the author, meaning that the expiration time has expired;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now);
                const timeLeftSec = timeLeft / 1000;
                return message.reply(`please wait ${timeLeftSec.toFixed(1)} more seconds before using the \`${command.name}\` command again!`);
            }
        }
    
        // Just to make sure the author ID of a used command gets deleted from the cooldown array after time has expired;
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
        // Tries to execute the command;
        try {
            command.execute(message, args, client)
        } catch (error) {
            console.error(error);
            message.channel.send("There was an error trying to execute that command!");
        }
        
    });

}