const express= require("express")
// const middleware = require("../middleware/mid1")
const router = express.Router();
router.get("/get-me", function(req, res){
    res.send("i am comming from get api request with get-me string")
})
router.get("/*", function(req, res){
    res.send("i am comming from get api request")
})
router.post("/*", function(req, res){
    res.send("i am comming from post api request")
})
// router.get("/get-me", function(req, res){
//     res.send("i am comming from get api request with get-me string")
// })
router.put("/*", function(req, res){
    res.send("i am comming from put api request" )
})
router.patch("/*", function(req, res){
    res.send("i am comming from patch api request" )
})

module.exports = router;