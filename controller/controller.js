const Book = require("../models/model.js");
const mongoose = require("mongoose")


let createBookData = async function(req,res){
    let currentBook = req.body;
    let sendingBook = await Book.create(currentBook);
    res.send({"latest added book is " : sendingBook})
}

let bookList = async function(req, res){
    let specifiedBook = await Book.find().select({bookName:1,authorName:1,_id:0})
    res.send({"specified book is " : specifiedBook})
}

let getBooksInYear = async function(req,res){
    let publishedYear = req.body.year;
    let BookAtYear = await Book.find({year:publishedYear})
    res.send({"book by year  " : BookAtYear})
}

let getParticularBooks = async function(req,res){
    let inputData = req.body;
    let allData = await Book.find({$or :[{bookName : inputData.bookName},{authorName:inputData.authorName},{year: inputData.year},{totalPages: inputData.totalPages}]});
    res.send({"suggestion" : allData})
}

let getXINRBooks = async function(req,res){
    // let allINRBooks = await Book.find({price : {$or : [{"indidanPrice":  "100 INR" }, {"indidanPrice": "200 INR"}, {"indidanPrice":"500 INR"}]}})
    
    let allData = await Book.find();
    let ResArr = [];
    for(i=0; i<allData.length;i++){
        if(allData[i].price.indidanPrice=="100 INR" || allData[i].price.indidanPrice=="200 INR" || allData[i].price.indidanPrice=="500 INR"){
            ResArr.push(allData[i])
        }
    }
    res.send({"indian rupees books are " : ResArr})
    
    // res.send ({"desired book is " : allINRBooks})
}

let getRandomBooks = async function(req,res){
    let allBooks = await Book.find({$or :[{stokAvailable: true},{totalPages : {$gte : 500}}]});
    res.send({"final book is ": allBooks});
}

module.exports.createBookData= createBookData;
module.exports.bookList= bookList;
module.exports.getBooksInYear = getBooksInYear ;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;