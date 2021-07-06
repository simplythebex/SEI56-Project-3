import ShoppedDrink from '../models/shoppedDrink.js'

// INDEX ROUTE - display all drinks
export const getAllShoppedDrinks = async (req, res) => {
  const drinks = await ShoppedDrink.find()
  return res.status(200).json(drinks)
}

// DRINK ROUTE (SHOW) - get one drink
export const displayShoppedDrink = async (req, res) => {
  try {
    const { id } = req.params
    const singleDrink = await ShoppedDrink.findById(id).populate('owner')
    if (!singleDrink) throw new Error()
    console.log('single drink', singleDrink)
    return res.status(200).json(singleDrink)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Oh no! This drink was not found!' })
  }
}