module.exports = {
	name: 'ping',
	description: 'Gives the ping from the bot to the server!',
	category: "Utility",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
		message.channel.send("There is a delay of " + Math.round(client.ws.ping) + " ms between where I'm located and this discord server!");
	},
};