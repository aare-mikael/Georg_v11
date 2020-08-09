module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	args: true,
	usage: "<user> <role>",
	execute(message, args) {
		message.channel.send('Pong.');
	},
};