const express = require("express");
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ];
 let Voterlist = []

 router.post("/voterlist", function(req, res){
    let myVar = req.query.votingAge;
    for (i=0; i<persons.length; i++){
        
        persons[i].votingStatus = persons[i].age>=myVar ? "true" : "false" ; 
        if(persons[i].votingStatus=="true"){
            Voterlist.push(persons[i]);
        }
    }
    res.send({Voterlist});

//   persons.filter(ele => ele.votingStatus==true )
    

    

 })


 module.exports = router;
 