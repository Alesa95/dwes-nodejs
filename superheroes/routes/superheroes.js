var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arraySuperheroes = [
        "Superman",
        "Mr Increíble",
        "Homelander",
        "Mr Kiwi",
        "Viuda Negra"
    ];

    res.render('superheroes/index', {
        title: 'Superhéroes', 
        superheroes: arraySuperheroes 
    });
});

module.exports = router;