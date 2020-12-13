const VoiceSpeaking = require("../utilities/VoiceSpeaking");

module.exports = {
    name: 'wdym',
    description: 'wdym',
    category: "Text",
    execute(message, args) {

        message.channel.bulkDelete(1);

        message.channel.send("*wdym*");
        message.channel.send("**wdym**");
        message.channel.send("***wdym***");
        message.channel.send("**wdym**");
        message.channel.send("*wdym*");

        VoiceSpeaking(message);
    }
}