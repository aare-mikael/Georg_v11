<<<<<<< HEAD
<<<<<<< HEAD
	module.exports = {
=======
<<<<<<< HEAD
module.exports = {
    name: "reload",
    description: "Reloads the command you specify",
    usage: "[reload command]",
    execute(message, args) {
        if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
            
        const commandName = args[0].toLowerCase();
        
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
	},
=======
=======
>>>>>>> c931b7fa109dadd1df63b9bf538aae1ac6af8524
module.exports = {
>>>>>>> b6b4272642284771e27439bf2f514f7d2bc8f8ff
    name: "reload",
    description: "Reloads the command you specify",
	usage: "[reload command]",
	category: "Private",
    execute(message, args) {
        if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
            
        const commandName = args[0].toLowerCase();
        
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};