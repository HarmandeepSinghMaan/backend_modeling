import mongoose from 'mongoose';


const orderItemSchema=new mongoose.Schema({
  productId: {
    type: mongoose.Schema.type.ObjectId,
    ref:"Product",
  },
  quantity :{
    type:Number,
    required:true.

  }.
})
const orderSchema = new mongoose.Schema({
  orderPrice:
  {
    type:Number,
    requied:true,
  },
  customer:
  {
    type:mongoose.Schema.type.OrderId,
    ref:"User",
  },
  oderItems:
  {
    type:[orderItemSchema]

  },
  address:
  {
    type:String,
    requied:true,
  },
  status:
  {
    type:String,
    enum:["PENDING","CANCELED","DELIVERDE"],
    default:"PENDING",
  },
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
