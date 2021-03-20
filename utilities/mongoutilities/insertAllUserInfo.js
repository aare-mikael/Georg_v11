const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then(async (mongoose) => {
        try {
            await discordUsers.findOneAndUpdate(
                {
                    user: message.author,
                },
                {
                    $addToSet: {
                        username: message.author.username,
                        namehistory: message.author.username,
                    }
                }
            )
        } finally {
            mongoose.connection.close();
        }
    })
}