import express from 'express'
import { getAllDrinks, createDrink, displayDrink, editDrink, deleteDrink } from '../controllers/drinks.js'
const router = express.Router()

router.route('/drinks')
  .get(getAllDrinks)
  .post(createDrink)

router.route('/drinks/:id')
  .get(displayDrink)
  .put(editDrink)
  .delete(deleteDrink)


export default router