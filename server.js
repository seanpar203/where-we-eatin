const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const Yelp = require('./yelp');

const PORT = process.env.PORT || 5000;
const oneMonth = 2629746000;

// Express Middleware
// ----------------------------

// Gzip Compression
app.use(compress());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('*', function(req,res) {
    res.sendFile(__dirname + 'index.html');
});

app.post('/search', (req, res) => {
    Yelp.search({
        term: req.body.term ,
        location: req.body.location,
        limit: 15,
        radius_filter: 37000
    })
    .then(function (data) {
        res.json(data)
    })
    .catch(function (err) {
        res.send(err.message);
    });
});

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
});