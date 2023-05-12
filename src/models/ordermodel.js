const mongoose=require('mongoose')
const objectid=mongoose.Types.ObjectId;
const orderSchema= new mongoose.Schema({
          userId:objectid,
          productId:objectid,
          amount:Number,
          isFreeUser:Boolean,
          date: Date
});
module.exports=mongoose.model("Order",orderSchema)