var mongoose = require('mongoose'),
artiste = mongoose.model('Artiste');

exports.list_all_artists = function(req, res) {

  var offset = parseInt(req.params.offset);
  var limit =  parseInt(req.params.limit);

    artiste.find({}, function(err, artiste) {
      if (err)
        res.send(err);
      res.json(artiste);
    }).limit(limit).sort({nom: 1}).skip(offset);

    res.setHeader('Access-Control-Allow-Origin',"*");
  };
