const express = require('express');
const app = express();

app.get("/sol1", function(req, res){
    //problem :- find the missing number of these consecutive array of numbers.

const arr= [1,2,3,4,5,7,8,9]


    //getting the sum of given array
    let s =0;
    arr.forEach(element => { s = s + element });
   
    // finding out that what should be the actual sum of that given array
    firstEelement = arr[0]
    lastElement = arr[arr.length-1]
    diff = 1  // here difference is 1 because the given array is array of consecutive numbers
    NumOfElements = (lastElement-firstEelement +1)
    Sum  = (NumOfElements/2)*(firstEelement + lastElement);

    // finding the missing number
    const missingNum = (Sum - s);
    // 
    


return res.send({"data" : missingNum});
});

app.get("/sol2", function(req, res){
    //problem :- find the missing number of these consecutive array of numbers.

    const arr2= [33,34,35,37,38,39]


    //getting the sum of given array
    let s =0;
    arr2.forEach(element => { s = s + element });
   
    // finding out that what should be the actual sum of that given array
    firstEelement = arr2[0]
    lastElement = arr2[arr2.length-1]
    // diff = 1  // here difference is 1 because the given array is array of consecutive numbers
    NumOfElements = (lastElement-firstEelement +1)
    Sum  = (NumOfElements/2)*(firstEelement + lastElement);

    // finding the missing number
    const missingNum1 = (Sum - s);
    // 
    


return res.send({"data" : missingNum1});
});
app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
