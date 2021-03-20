const mongo = require('../utilities/mongoutilities/mongo');

const welcomeSchema = require('../mongoschemas/welcomeSchema');

const { member, channel, content, guild } = message;

module.exports = {
    name: 'welcome',
    description: "Change welcome message in your server",
    category: "Text",
    async execute(message, args) {

        if(!member.hasPermission('ADMINISTRATOR')) {
            channel.send("Sorry, but you do not have the necessary permissions to run this command. You need administrator permissions!");
            return;
        }

        if(!args[0]) {
            channel.send("You can't have a welcome-message that's empty, fill in your text after the command!");
            return;
        }

        await mongo().then(async (mongoose) => {
            try {
                await welcomeSchema.findOneAndUpdate({
                    _id: guild.id
                }, {
                    _id: guild.id,
                    channelId: channel.id,
                    text: args,                    
                }, {
                    upsert: true
                })
            } finally {
                mongoose.connection.close();
            }
        })
    },
};