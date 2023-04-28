const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    }, 
    price : {
        indidanPrice : String,
        europeanPrice : String
    },
    year : {
        type : Number,
        default : 2021
    },
    tags : [ String ],
    authorName : String,
    totalPages : Number,
    stokAvailable : Boolean
},{ timestamps : true});

module.exports= mongoose.model('Book', bookSchema);