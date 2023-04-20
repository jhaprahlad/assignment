let time = new Date();
function printDate(){
    console.log("Problem 2 :- module 2")
    console.log("current date is :- ",time.getDate());
}
function printMonth(){
    console.log("current month is :- ",time.getMonth()+1)
}
function getBatchInfo(batch, WD){
    console.log(`${batch}, ${WD}, the topic for today is Nodejs module system \n`);
}
module.exports.printDate= printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo







// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
