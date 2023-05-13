const usermodel = require("../model/usermodel")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")


const register = async function(req,res){
    let data = req.body;
    if (!data){return res.send("please provide required information")}
    let userData = await usermodel.create(data)
    return res.send({"user :- ": data})
}

const login = async function(req,res){
    let email= req.body.emailId;
    let pass= req.body.password;
    if(!email || !pass){
        return res.send("plese provide Email-Id and Password for login")
    }
    let checkUser = await usermodel.findOne({emailId:email,password:pass})

    if (!checkUser){
        return res.send("emaild or password is incorrect")
    }

    let token = jwt.sign({
        IdOfUser : checkUser._id.toString(),
        EmailOfUser: email
    },
    "Complex_Secret_Key"
    )

    res.setHeader("x-auth-token", token);
    return res.send({"msg :- " : token, "status ": true})
}

const users= async function(req,res){
    let IdOfUser = req.params.userId
    // console.log(IdOfUser)
    if(!IdOfUser){return res.send("please provide userId")}
    let dataOfUser= await usermodel.findById(IdOfUser);
    if(!dataOfUser){return res.send("not found any user with this ID")}
    return res.send({"user :- ": dataOfUser})
}

const updateUser = async function(req,res){
    let IdOfUser= req.params.userId;
    let data= req.body
    if(!IdOfUser){return res.send("please provide userId")}
    let updatedUser = await usermodel.findByIdAndUpdate(
        IdOfUser,
        {$set: data},
        {new:true}
    )
    return res.send({"updated :- ": updatedUser})

}

const deleteUser = async function(req,res){
    let IdOfUser= req.params.userId;
    if(!IdOfUser){return res.send("please provide userId")}
    let deletedUser = await usermodel.findByIdAndUpdate(
        IdOfUser,
        {$set:{isDeleted:true} },
        {new:true}
    )
    return res.send({"deleted user is :-": deletedUser})

}

const postMessage = async function(req,res){
    let IdOfUser= req.params.userId;
    let message = req.body.message
    if(!IdOfUser){return res.send("please provide userId")};
    let user = await usermodel.findById(IdOfUser);
    let posts = user.post
    // if (!posts){
    //     return res.send("cant post any message") 
    // }
    posts.push(message);
    let userPost = await usermodel.findByIdAndUpdate(
        IdOfUser,
        {$set : {post :posts}},
        {new:true}
    )
    return res.send({"msg :- " : userPost})

}

module.exports.register=register;
module.exports.login = login;
module.exports.users= users;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
module.exports.postMessage=postMessage;