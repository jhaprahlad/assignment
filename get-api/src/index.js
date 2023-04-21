const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const movie = require('../src/movies/movies.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', movie);


app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
