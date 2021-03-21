module.exports = {
    name: 'wdym',
    description: 'wdym',
    category: "Text",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        message.channel.bulkDelete(1);

        message.channel.send("*wdym*");
        message.channel.send("**wdym**");
        message.channel.send("***wdym***");
        message.channel.send("**wdym**");
        message.channel.send("*wdym*");
    }
}