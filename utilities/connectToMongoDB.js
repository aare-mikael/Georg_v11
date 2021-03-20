const mongoose = require('mongoose');
const mongoPath = process.env.mongoPath;
const mongo = require('mongo');

module.exports = async () => {
    await mongo().then((mongoose) => {
        try {
            console.log('Connected to MongoDB');
        } finally {
            mongoose.connection.close();
        }
    })
}