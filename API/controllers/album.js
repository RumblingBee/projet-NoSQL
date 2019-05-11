var mongoose = require('mongoose'),
album = mongoose.model('Album');

exports.list_all_albums = function(req, res) {

  var offset = parseInt(req.params.offset);
  var limit =  parseInt(req.params.limit);

    album.find({}, function(err, album) {
      if (err)
        res.send(err);
      res.json(album);
    }).limit(limit).sort({annee: 1}).skip(offset);

    res.setHeader('Access-Control-Allow-Origin',"*");
  };



  
exports.get_catalog = function(req, res) {

  var offset = parseInt(req.params.offset);
  var limit =  parseInt(req.params.sort);

    album.find({}, function(err, album) {
      if (err)
        res.send(err);
      res.json(album);
    }).limit(4).sort({prix: 1, artiste:1}).skip(offset);

    res.setHeader('Access-Control-Allow-Origin',"*");
  };