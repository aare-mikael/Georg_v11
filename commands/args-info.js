<<<<<<< HEAD
module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(message, args) {
        if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
=======
module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	category: "Text",
	execute(message, args) {
        if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};