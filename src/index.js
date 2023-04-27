const express = require('express')
const bodyparser = require('body-parser')
const { default: mongoose } = require('mongoose')
// const {default : mongoose} = require('mongoose')
const route = require("../requests/request.js")
const app = express();

mongoose.connect("mongodb+srv://jhaprahlad:mEG8wRQKwJidfdq2@cluster0.qqlks75.mongodb.net/prahlad1stDB?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then (() => console.log("congratulation prhalad your mongodb is connected now"))
.catch(err => console.log(err))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', route);

const PORT = 4500;

app.listen(PORT, function(){console.log('hi prahlad your app is running on port  '+ PORT)}); 
