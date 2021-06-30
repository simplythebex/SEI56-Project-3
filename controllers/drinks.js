import Drink from '../models/drink.js'

// INDEX ROUTE - display all drinks
export const getAllDrinks = async (_req, res) => {
  const drinks = await Drink.find()
  return res.status(200).json(drinks)
}

// CREATE ROUTE - create a drink
export const createDrink = async (req, res) => {
  try {
    const drinkToAdd = await Drink.create(req.body)
    console.log('DRINK TO ADD', drinkToAdd)
    return res.status(201).json(drinkToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// DRINK ROUTE - get one drink
export const displayDrink =  async (req, res) => {
  try {
    const { id } = req.params
    const singleDrink = await Drink.findById(id)
    if (!singleDrink) throw new Error()
    console.log('single drink', singleDrink)
    return res.status(200).json(singleDrink)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Oh no! This drink was not found!' })
  }
}

// DELETE ROUTE - removes a drink
export const deleteDrink =  async (req, res) => {
  const { id } = req.params
  try {
    await Drink.findByIdAndDelete({ _id: id })
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Oh no! This drink was not found!' })
  }
}

// EDIT ROUTE - edits a drink
export const editDrink =  async (req, res) => {
  const { id } = req.params
  try {
    const drinkToUpdate = await Drink.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    if (!drinkToUpdate) throw new Error()
    return res.status(200).json(drinkToUpdate)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Oh no! This drink was not found!' })
  }
}