const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then(async (mongoose) => {
        try {
            await discordUsers.findOneAndUpdate({
                user: message.mentions.users.first() || message.author,

            }, {

            })
        } finally {
            mongoose.connection.close();
        }
    })
}