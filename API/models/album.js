const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    pre_mongified_id:Number,
    artiste:String,
    nom:String,
    annee:Number,
    image:String,
    prix:Number
}, {collection: 'album'});

module.exports = mongoose.model('Album',albumSchema);