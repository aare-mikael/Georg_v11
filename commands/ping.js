module.exports = {
	name: 'ping',
	description: 'Ping!',
	args: true,
	usage: "<user> <role>",
	execute(message, args) {
		message.channel.send('Pong.');
	},
};