const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const tokenValidation = function(req, res, next){
    let token = req.header("x-auth-token")
    try {
        if (!token){return res.send("access token is not present")}

        decodedToken = jwt.verify(token, "Complex_Secret_Key")
        // console.log(token);
        // console.log(decodedToken);
        // console.log(req.params)

        if (decodedToken.IdOfUser != req.params.userId){
            return res.send("you have no authorization")
        }
        next ();
        
    } catch (error){console.log(error)
        
    }
}
module.exports.tokenValidation= tokenValidation;