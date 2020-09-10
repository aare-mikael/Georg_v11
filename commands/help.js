const { prefix } = require('../config.json');

module.exports = {
    name: "help",
    description: "Lists all commands currently available for use",
    aliases: ["commands"],
    usage: "[command name]",
    cooldown: 3,
    category: "Help",
    execute(message, args, client) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            // Sender i DM til author;
            data.push('**Here\'s a list of all my commands:\n**');

            // Original way of pushing commands in DM's;
//            data.push(commands.map(command => command.name).join('\n'));

           
            var text = commands.filter(cmd => cmd.category == 'Text').array();
            console.log("TEKST ARRAY: " + text);
            var textOut = "";
                for (const cmd of text) {
                    textOut += cmd.name + "\n"
                };
            console.log("textout " + textOut);

            var voice = commands.filter(cmd => cmd.category == 'Voice').array();
            console.log("VOICE ARRAY: " + voice);
            var voiceOut = "";
                for (const cmd of voice) {
                    voiceOut += cmd.name + "\n";
                };

            var utility = commands.filter(cmd => cmd.category == 'Utility').array();
            console.log("UTILITY ARRAY: " + utility);
            var utilityOut = "";
                for (const cmd of utility) {
                    utilityOut += cmd.name + "\n";
                };

            var help = commands.filter(cmd => cmd.category == 'Help').array();
            console.log("HELP ARRAY: " + help);
            var helpOut = "";
                for (const cmd of help) {
                    helpOut += cmd.name + "\n";
                };

            var Out = "**TextCommands: **" + '\n' + textOut + '\n' + "**VoiceCommands: **" + '\n' + voiceOut + '\n' + "**UtilityCommands: **" + '\n' + utilityOut + '\n' + "**HelpCommands: **" + '\n' + helpOut + '\n';
            
            // Pushes all commands;
            data.push(Out);

            
           
            

            data.push(`You can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
            	.then(() => {
                        if (message.channel.type === 'dm') return;
                        
                        message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        
        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
        if (command.category) data.push(`**Category:** ${prefix}${command.name} ${command.category}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });

    }
}