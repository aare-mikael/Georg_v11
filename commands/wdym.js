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
}