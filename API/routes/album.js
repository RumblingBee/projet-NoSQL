
module.exports = function(app){


const Album = require('../controllers/album');


 app.route('/albums')
    .get(Album.list_all_albums);

}