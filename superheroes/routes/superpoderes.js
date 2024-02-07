var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db('superheroes');
const superpoderesCollection = database.collection("superpoderes");

/* GET home page. */
router.get('/', async(req, res, next) => {
    /*var arraySuperpoderes = [
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
            superpoder: "Superagilidad"
        }
    ];*/

    var arraySuperpoderes = getAllSuperpoderes();

    res.render('superpoderes/index', {
        title: 'Superpoderes', 
        superpoderes: await arraySuperpoderes 
    });
});

async function getAllSuperpoderes() {
    try {
        var query = {};
        var superpoderes = await superpoderesCollection.find(query).toArray();
        //console.log(superpoderes.length);
        return superpoderes;
    } finally {
        // esto es una guarrada, deberíamos hacer un catch
    }
}

module.exports = router;