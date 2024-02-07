var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arraySuperpoderes = [
        {  
            superheroe: "Superman", 
            superpoder: "Volar"
        },
        {
            superheroe: "Mr Increíble",
            superpoder: "Superfuerza"
        },
        {
            superheroe: "Batman", 
            superpoder: "Dinero"
        },
        {
            superheroe: "Viuda Negra", 
            supderpoder: "Superagilidad"
        }
    ];

    res.render('superpoderes/index', {
        title: 'Superpoderes', 
        superpoderes: arraySuperpoderes 
    });
});

module.exports = router;