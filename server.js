var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


  mongoose = require('mongoose'),
  Album = require('./api/models/album'), //created model loading here
  Artiste = require('./api/models/artiste'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/music'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Serveur démarré sur le port ' + port);