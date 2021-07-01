import mongoose from 'mongoose'

// define the drink schema
const drinkSchema = new mongoose.Schema({
  drink: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  funFact: { type: String, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// define model
export default mongoose.model('Drink', drinkSchema)




