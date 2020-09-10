<<<<<<< HEAD
module.exports = {
	name: 'disconnect',
    description: 'Disconnects bot from voicechannel',
	execute(message, args) {
		// Sjekker om personen som skriver meldingen er i samme voice kanal;

		if (!message.member.voice.channel == true) {
			message.reply("You have to be in the same voicechannel as me to throw me out of here!");
		} else {
			message.member.voice.channel.leave();
		}
	},
=======
module.exports = {
	name: 'disconnect',
	description: 'Disconnects bot from voicechannel',
	category: "Utility",
	execute(message, args) {
		// Sjekker om personen som skriver meldingen er i samme voice kanal;

		if (!message.member.voice.channel == true) {
			message.reply("You have to be in the same voicechannel as me to throw me out of here!");
		} else {
			message.member.voice.channel.leave();
		}
	},
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
};