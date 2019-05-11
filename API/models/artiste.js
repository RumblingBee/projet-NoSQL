const mongoose = require('mongoose');

const artisteSchema = mongoose.Schema({
    nom:String,
    pays:String,
    genre:String,
}, {collection: 'artistes'});

module.exports = mongoose.model('Artiste',artisteSchema);