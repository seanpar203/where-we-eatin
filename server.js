const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;
const Yelp = require('./yelp');
const oneYear = 31557600000;

/**
 * Middleware Config
*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.vary('Accept-Encoding');
    next();
});

app.get('*', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/search', (req, res) => {
    Yelp.search({
        term: req.body.term ,
        location: req.body.location,
        limit: 10,
        radius_filter: 12874.8
    })
    .then(function (data) {
        res.json(data)
    })
    .catch(function (err) {
        res.send(err.message);
    });
});

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
});