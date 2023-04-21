const express = require('express');
const router = express.Router();

const moviearr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begin"];
const films=[ {
    id: 1,
    name1: "The Shining"
   },
    {
    id: 2,
    name1: "Incendies"
   },
    {
    id: 3,
    name1: "Rang de Basanti"
   },
    {
    id: 4,
    name1: "Finding Nemo"
   }]
    

//problem 1
router.get('/get/movies', function(req,res){
    res.send(moviearr)
    console.log("sucessfully solved problem no. 1 \n \n")
} );

//problem 2 and problem 3
router.get('/get/movies/:id', function(req,res){
    const id1= req.params.id
    if (id1>moviearr.length - 1  || id1< 0){
        res.send(`error `)
    
    }else{
        res.send(moviearr[id1])
        console.log("sucessfully solved problem no. 2 and 3 \n \n")
    }
})

// problem 4
router.get(`/get/films`, function(req,res){
    res.send(films);
    console.log("sucessfully solved problem no. 4 \n \n")

})

//problem 5
router.get(`/get/films/:filmid`,function (req,res){
    const id2 = req.params.filmid;
    if (id2>films.length || id2 < 0 || id2 ==){
        res.send(`error movie`)
    }else {
        res.send(films[id2])
    }
    console.log("sucessfully solved problem no. 5 \n \n")


})


module.exports= router;