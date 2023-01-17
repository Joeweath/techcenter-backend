import mongoose from "mongoose";

const Schema = mongoose.Schema;


const orderSchema = new mongoose.Schema(
    {
  name: {type: Schema.Types.ObjectId, ref: "Transaction"},
  shipping: String,
  email: {type: Schema.Types.ObjectId, ref: "User"},
  phone: Number,
  totalcost: Number,
  date: Date,
  quanity: Number
  
    }
)

const Order = mongoose.model('Order', orderSchema)

export {
    Order
}