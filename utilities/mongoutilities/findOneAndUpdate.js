const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then(async (mongoose) => {
        try {
            const result = await discordUsers.findOneAndUpdate({
                user: message.mentions.users.first() || message.author,
                // Sette inn kriterie for at personen ikkje har introlyd allerede?
            }, {
                // Oppdatere introlyd kanskje?
            }, {
                upsert: true,
                new: true,
            })
        } finally {
            mongoose.connection.close();
        }
    })
}