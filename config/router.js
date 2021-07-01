import express from 'express'
import { getAllDrinks, createDrink, displayDrink, editDrink, deleteDrink } from '../controllers/drinks.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
const router = express.Router()

router.route('/drinks')
  .get(getAllDrinks)
  .post(secureRoute, createDrink)

router.route('/drinks/:id')
  .get(displayDrink)
  .put(secureRoute, editDrink)
  .delete(secureRoute, deleteDrink)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router
