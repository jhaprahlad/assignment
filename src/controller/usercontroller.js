const usermodel = require("../models/usermodel")
// const userModel = require("../models/usermodel")

const createUser = async function(req, res){
    let userData = req.body
    let saveUser = await usermodel.create(userData)
    return res.send({"msg":saveUser})
}

const getUserData= async function(req,res){
    let allUser = await usermodel.find()
    return res.send({"list": allUser})
}
module.exports.createUser= createUser;
module.exports.getUserData= getUserData;