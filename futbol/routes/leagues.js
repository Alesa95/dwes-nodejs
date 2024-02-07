var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var leagues = [
        "Liga EA Sports",
        "Premier League",
        "Serie A",
        "Ligue 1"
    ];

    res.render('leagues', { title: 'Leagues', leagues: leagues });
});

module.exports = router;
