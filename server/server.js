const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const Yelp = require('./yelp');


/**
 * Middleware Config
*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/search', (req, res) => {
    console.log(req.body.term);
    Yelp.search({ term: req.body.term , location: req.body.location, limit: 15, radius_filter: 16093})
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