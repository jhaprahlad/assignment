const productModel = require("../models/productmodel")


const createProduct = async function (req, res){
    let productData= req.body
    let saveProduct = await productModel.create(productData)
    return res.send({"product is " : saveProduct})
}

const getProductData= async function(req,res){
    let allProduct= await productModel.find()
    return res.send({"list" :allProduct})
}
module.exports.createProduct=createProduct;
module.exports.getProductData=getProductData;