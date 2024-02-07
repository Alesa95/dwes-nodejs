var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var matches = [
        ["Málaga", 3, 2, "Granada"],
        ["Huesta", 2, 0, "Alcorcón"],
        ["Cártama Estación", 1, 2, "El Palo"]
    ];

    res.render('matches', { title: 'Matches', matches: matches });
});

module.exports = router;