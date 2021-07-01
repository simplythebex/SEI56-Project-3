import express from 'express'
import { getAllDrinks, createDrink, displayDrink, editDrink, deleteDrink } from '../controllers/drinks.js'
import { registerUser, loginUser } from '../controllers/auth.js'
const router = express.Router()

router.route('/drinks')
  .get(getAllDrinks)
  .post(createDrink)

router.route('/drinks/:id')
  .get(displayDrink)
  .put(editDrink)
  .delete(deleteDrink)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router