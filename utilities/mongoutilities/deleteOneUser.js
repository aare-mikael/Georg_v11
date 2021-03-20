const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then(async (mongoose) => {
        try {
            await discordUsers.deleteOne({
                username: 'Trash',
            })
        } finally {
            mongoose.connection.close();
        }
    })
}