module.exports = {
	name: 'ping',
	description: 'Gives the ping from the bot to the server!',
	cooldown: 5,
	category: "Utility",
	args: true,
//	usage: "<user> <role>",
	execute(message, args, client) {
		message.channel.send(Math.round(client.ws.ping) + " ms");
	},
};