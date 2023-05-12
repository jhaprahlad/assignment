const orderModel = require("../models/ordermodel");
const usermodel = require("../models/usermodel");
const productModel = require("../models/productmodel");
const { ObjectId } = require("mongodb");
const ordermodel = require("../models/ordermodel");

const createOrder = async function (req, res) {
    // let orderData = req.body;
    let IdOfUser = req.body.userId;
    let IdOfProduct = req.body.productId;
    let isFreeAppUser = req.header("isFreeAppUser");

    let userDetails = await usermodel.findById(IdOfUser)
    let ProductDetails = await productModel.findById(IdOfProduct)

    let myprice= userDetails.balance - ProductDetails.price
    // console.log("1")

    if (isFreeAppUser== "false"){

        if(myprice>=0){
        
            req.body.amount= ProductDetails.price;
            let updateUser = await usermodel.findByIdAndUpdate(
                IdOfUser,
                {
                    $set : { balance: myprice}

                }
            )
            let placedOrder = await ordermodel.create(req.body);
            return res.send({"order" : placedOrder})
        }

        if (myprice<0){
            return res.send("you have no enough balance to purchase this order")
        }
    }
    else {
        // console.log("2")
        req.body.amount= 0;
       
        let orderInfo = req.body
        let placedOrder= await orderModel.create(orderInfo)
        return res.send({"order" : placedOrder})
    }

//     if (!IdOfUser || !IdOfProduct) {
//         return res.send("please provide userId and productId");
//     }

//     let userDetails = await usermodel.findOne({ _id: IdOfUser });
//     let productDeatails = await productModel.findOne({ _id: IdOfProduct });

//     if (!userDetails || !productDeatails) {
//         return res.send("invalid userId or productId");
//     }

//     let allUsers = await usermodel.find();
//     let allProduct = await productModel.find();




//     for (i = 0; i < allUsers.length; i++) {
//         for (j = 0; j < allProduct.length; j++) {
//             if (IdOfUser == allUsers[i]._id && IdOfProduct == allProduct[j]._id) {
//                 if (
//                     isFreeAppUser == false &&
//                     allUsers[i].balance >= allProduct[j].price
//                 ) {
//                     let order = await orderModel.create(orderData);
//                     let updateUser = await usermodel.findOneAndUpdate(
//                         { _id: IdOfUser },

//                         { $set: { balance: (userDetails.balance) - (productDeatails.price) } },

//                         { $new: true }

//                     )
//                     return res.send({ "placed order": order })
//                 }

//                 else if (isFreeAppUser == false &&
//                     allUsers[i].balance < allProduct[j].price) {
//                     return res.send("you dont have enough balance")
//                 }

//                 else if (isFreeAppUser == "true") {
//                     let Order = await orderModel.create(orderData)
//                     let updateOrder = await orderModel.findOneAndUpdate(
//                         {userId:IdOfUser},
//                         {$set : {amount:0}},
//                         {$new :true}
//                         )
//                         return res.send({"placed order": Order})
//                 }


//             }
//         }
//     }
//     res.send("first register");
// };
// };
};
const getOrder = async function(req,res){
    let data = await ordermodel.find()
    return res.send({"allOrder":data})
}
module.exports.createOrder=createOrder;
module.exports.getOrder=getOrder;
