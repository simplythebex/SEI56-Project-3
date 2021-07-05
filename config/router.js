import express from 'express'
import { getAllDrinks, createDrink, displayDrink, editDrink, deleteDrink, addComment, deleteComment } from '../controllers/drinks.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile } from '../controllers/users.js'
const router = express.Router()

router.route('/drinks')
  .get(getAllDrinks)
  .post(secureRoute, createDrink)

router.route('/drinks/:id')
  .get(displayDrink)
  .put(secureRoute, editDrink)
  .delete(secureRoute, deleteDrink)

router.route('/drinks/:id/comments')
  .post(secureRoute, addComment)

router.route('/drinks/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile/:id')
  .get(secureRoute, getUserProfile)



export default router
