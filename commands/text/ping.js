module.exports = {
	name: 'ping',
	description: 'Gives the ping from the bot to the server!',
	category: "Utility",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
		message.channel.send(Math.round(client.ws.ping) + " ms");
	},
};