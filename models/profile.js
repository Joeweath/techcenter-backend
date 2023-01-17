import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  order: [{type: Schema.Types.ObjectId, ref: "Order"}],
  cart: [{type: Schema.Types.ObjectId, ref: "Cart"}],
  transaction: [{type: Schema.Types.ObjectId, ref: "Transaction"}],
  admin: {type: Boolean, default: false}
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
