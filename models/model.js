// const mongoose = require('mongoose');

const mongoose = require('mongoose');
const mySchema = new mongoose.Schema({
    bookName : String,
    authorName : String ,
    category : [ String ],
    year : Number
}, {timestamps : true });



module.exports = mongoose.model('prahladBook', mySchema)