const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('../src/players/players.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use ('/', route);
const PORT = 4500;


app.listen(PORT, function(req,res){
    console.log("your app is runnning at port no. " + PORT)
})