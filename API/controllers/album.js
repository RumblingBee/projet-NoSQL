var mongoose = require('mongoose'),
album = mongoose.model('Album');

exports.list_all_albums = function(req, res) {
    album.find({}, function(err, album) {
      if (err)
        res.send(err);
      res.json(album);
    });
  };