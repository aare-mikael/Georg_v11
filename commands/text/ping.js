module.exports = {
	name: 'ping',
	description: 'Gives the ping from the bot to the server!',
	category: "Utility",

	callback: (message) => {
//		message.channel.send(Math.round(client.ws.ping) + " ms");
		message.channel.send('Pong');
	},
};