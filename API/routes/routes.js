module.exports = function (app) {


   const Album = require('../controllers/album');
   const Artiste = require('../controllers/artiste');


   app.route('/albums/:offset/:limit')
      .get(Album.list_all_albums);

   app.route('/catalog/:offset/:limit')
      .get(Album.get_catalog);


   app.route('/artistes/:offset/:limit')
      .get(Artiste.list_all_artists);

}