const mongoose = require('mongoose');

const introsoundSchema = mongoose.Schema({
    name: String,
    id: String,
    toggled: Boolean,
    url: String
})

module.exports = mongoose.model('introsounds', introsoundSchema);