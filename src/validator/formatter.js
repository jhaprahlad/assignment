const word = '         functionUP '
 
function trim(){
    console.log("Problem 3 :- module 3")

    console.log("after triming :- ",word.trim())
}
function lowercase(){
    console.log("after calling lowercase function :- ",word.toLowerCase())
}
function uppercase(){
    console.log("after calling uppercase function :- ",word.toUpperCase())
}
module.exports.trim=trim
module.exports.lowercase=lowercase
module.exports.uppercase=uppercase

