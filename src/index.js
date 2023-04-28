const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require("../requests/request.js")
const mongodb= require('mongodb');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://jhaprahlad:mEG8wRQKwJidfdq2@cluster0.qqlks75.mongodb.net/prahlad2ndAssignment?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then(()=> console.log("hi prahlad, your database is connected now"))
.catch(err => console.log(err))


app.use("/", route);

const PORT = 7000;

app.listen(PORT , function(){
    console.log("your app is running at port no. :-  " + PORT)
})








