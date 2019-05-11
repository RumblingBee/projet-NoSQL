
module.exports = function(app){


const Artiste = require('../controllers/artiste');


 app.route('/artistes/:offset/:limit')
    .get(Artiste.list_all_artists);


}