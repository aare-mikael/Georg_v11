<<<<<<< HEAD
module.exports = {
    name: 'wdym',
    description: 'wdym',
    execute(message, args) {

        message.channel.bulkDelete(1);

        message.channel.send("*wdym*");
        message.channel.send("**wdym**");
        message.channel.send("***wdym***");
        message.channel.send("**wdym**");
        message.channel.send("*wdym*");
    }
=======
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
    }
>>>>>>> 162081be50e93303004d213456a09e9250e98d2f
}