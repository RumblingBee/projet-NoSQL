
module.exports = function(app){


const Album = require('../controllers/album');


 app.route('/albums/:offset/:limit')
    .get(Album.list_all_albums);

 app.route('/catalog/:offset/:limit')
    .get(Album.get_catalog);

}