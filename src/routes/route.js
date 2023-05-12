const express= require("express")
const router = express.Router();
const middleware= require("../middleware/mid1")
const userController = require("../controller/handler")

router.get("/test-me", function(req,res){
    res.send("all good")
})

router.post("/register", userController.register)
router.post("/login", userController.login);
router.get("/users/:userId",middleware.tokenValidation,userController.users);
router.put("/updateUser/:userId",middleware.tokenValidation,userController.updateUser )
router.delete("/deleteUser/:userId",middleware.tokenValidation,userController.deleteUser )

module.exports= router;