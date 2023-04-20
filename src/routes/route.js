const express = require('express');
const { route } = require('express/lib/application');
const underscore = require('underscore');
const lodash = require('lodash');
const router = express.Router();
const loggerFile = require('../logger.js')
const helperfile = require('../util/helper.js')
const formatterfile = require('../validator/formatter.js')

router.get('/get-me', function (req, res) {

    //Problem 1 module 1
    loggerFile.welcome("Prahlad");

    // Problem 2 module 2
    helperfile.printDate();
    helperfile.printMonth();
    helperfile.getBatchInfo('Technetium','W5D5')

    //Problem 3 module 3
    formatterfile.trim()
    formatterfile.lowercase()
    formatterfile.uppercase()

    //Problem 4 module 4 

    //part 1
    console.log ( " \n problem 4 :- module 4 \n [part 1] (using chunk ) :- \n",lodash.chunk(["January","February","March","April","May","June","July",
    "August","September","October","November","December"],4));

    //part 2 
    console.log("\n[part 2] using tail function :- \n", lodash.tail([1,3,5,7,9,11,13,15,17,19]));


    //part 3
    console.log("\n[part 3] using union function :- \n", lodash.union([1,2,3],[7,0,6]));


    //part 4
    console.log("\n[part 4] using fromPairs function :- \n", lodash.fromPairs([['name', 'prahlad' ],['cohort', 'technetium']]) );


    

    
    res.send('hi Prahlad, you just successfully completed the task ')
});
module.exports = router;