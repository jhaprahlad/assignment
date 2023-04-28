const express = require("express");
const request = express.Router();
const bookStructure = require("../models/model.js");
const bookController = require("../controller/controller.js")
request.use(express.json())



request.post("/createBook", bookController.createBookData);
request.get("/bookList", bookController.bookList);
request.post("/getBooksInYear", bookController.getBooksInYear);
request.post("/getParticularBooks", bookController.getParticularBooks)
request.get("/getXINRBooks", bookController.getXINRBooks)
request.get("/getRandomBooks", bookController.getRandomBooks);

module.exports= request;




