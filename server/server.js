const express = require('express');
const app = express();
const Oauth = require('oauth');

app.get('/', (req, res) => {
    res.send('Hello World Little Nigga!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});