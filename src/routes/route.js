const express= require("express")
const router = express.Router();
const middleware= require("../middleware/mid1")
const userController = require("../controller/usercontroller")
const productController = require("../controller/productcontroller")
const ordercontroller= require("../controller/ordercontroller")
// router.get("/*", function(req, res){
//     res.send("all good ")
// }) 


router.post("/createUser",middleware.validationByHeader, userController.createUser)

router.post("/getUserData", userController.getUserData)

router.post("/createProduct", productController.createProduct)

router.post("/getProductData", productController.getProductData)

router.post("/createOrder",middleware.validationByHeader,ordercontroller.createOrder)

router.post("/getOrde",ordercontroller.getOrder)

module.exports= router;