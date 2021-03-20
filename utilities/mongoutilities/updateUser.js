const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then(async (mongoose) => {
        try {
            await discordUsers.updateOne({ // updateMany vil oppdatere alle matchene den finner;
                username: 'Trash',
            }, {
                username: 'Trash2',
            })
        } finally {
            mongoose.connection.close();
        }
    })
}