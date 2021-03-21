module.exports = {
	name: 'disconnect',
	description: 'Disconnects bot from voicechannel',
	category: "Utility",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
		// Sjekker om personen som skriver meldingen er i samme voice kanal;

		if (!message.member.voice.channel == true) {
			message.reply("You have to be in the same voicechannel as me to throw me out of here!");
		} else {
			message.member.voice.channel.leave();
		}
	},
};