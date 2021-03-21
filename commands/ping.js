module.exports = {
	name: 'ping',
	description: 'Gives the ping from the bot to the server!',
	category: "Utility",
	
//	usage: "<user> <role>",
	execute(message, args, client) {
//		message.channel.send(Math.round(client.ws.ping) + " ms");
		message.channel.send('Pong');
	},
};