const mongoose = require('mongoose');
const mongoPath = process.env.mongoPath;
const mongo = require('utilities\mongo.js');

module.exports = async () => {
    await mongo().then((mongoose) => {
        try {
            console.log('Connected to MongoDB');
        } finally {
            mongoose.connection.close();
        }
    })
}