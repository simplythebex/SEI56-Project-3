import express from 'express'
import { getAllDrinks, createDrink, displayDrink, editDrink, deleteDrink, addComment, deleteComment } from '../controllers/drinks.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile } from '../controllers/users.js'
import { createSuggestedDrink, getAllSuggestedDrinks, displaySuggestedDrink, editSuggestedDrink, deleteSuggestedDrink, deleteCommentOnSuggestedDrink, addCommentOnSuggestedDrink } from '../controllers/suggestedDrinks.js'
const router = express.Router()

router.route('/suggested-drinks')
  .get(getAllSuggestedDrinks)
  .post(secureRoute, createSuggestedDrink)

router.route('/suggested-drinks/:id')
  .get(displaySuggestedDrink)
  .put(secureRoute, editSuggestedDrink)
  .delete(secureRoute, deleteSuggestedDrink)

router.route('/suggested-drinks/:id/comments')
  .post(secureRoute, addCommentOnSuggestedDrink)

router.route('/suggested-drinks/:id/comments/:commentId')
  .delete(secureRoute, deleteCommentOnSuggestedDrink)

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

router.route('/profile')
  .get(secureRoute, getUserProfile)



export default router
