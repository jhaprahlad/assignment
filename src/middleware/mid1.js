const usermodel = require("../models/usermodel");
const productModel = require("../models/productmodel");
const validationByHeader = async function(req, res, next){
    let isFreeAppUser = req.header("isFreeAppUser")
    if(!isFreeAppUser){
        return res.send(" request is missing a mandatory header")
    }
    req.body.isFreeAppUser= isFreeAppUser;
    console.log(req.body)


    let Uid = req.body.userId;
    let Pid = req.body.productId;
    let checkUser = await usermodel.findById(Uid)
    let checkProduct = await productModel.findById(Pid)

    if (!checkUser || !checkProduct){
        return res.send("please provide valid userId and productId")
    }
    // console.log("hello");
    next();
}
// const validationbyId = async function(req,res,next){
//     let Uid = req.body.userId;
//     let Pid = req.body.productId;
//     let checkUser = await usermodel.findById(Uid)
//     let checkProduct = await productModel.findById(Pid)

//     if (!checkUser || !checkProduct){
//         return res.send("please provide valid userId and productId")
//     }
//     console.log("hello")
//     next();
// }

module.exports.validationByHeader =validationByHeader;
// module.exports.validationbyId=validationbyId;