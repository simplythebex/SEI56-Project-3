import mongoose from 'mongoose'

const shoppedDrinkSchema = new mongoose.Schema({
  drink: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  funFact: { type: String, maxlength: 300 },
  origin: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


// define model
export default mongoose.model('ShoppedDrink', shoppedDrinkSchema)
