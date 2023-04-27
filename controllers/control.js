const myModel = require("../models/model.js");

let createNewBook =  async function(req, res){
    let mybook = req.body;
    let saveBook = await myModel.create(mybook);
    res.send( {"reuslt is"  : saveBook} );

}

let getBook = async function(req,res){
    let resBook = await myModel.find();
    res.send({ " read carefully " : resBook});
}
module.exports.createNewBook = createNewBook;
module.exports.getBook = getBook;