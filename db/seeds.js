import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Drink from '../models/drink.js'
import drinkData from './data/drinks.js'
import User from '../models/user.js'
import userData from './data/users.js'

const seedDatabase = async () => {
  try {
    // connect to db 
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DB connected in seeds')

    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍🏽 DB dropped')

    // create users
    const users = await User.create(userData)
    console.log(users)


    // create drinkData with added ownwer field 
    const drinksWithAddedUsers = drinkData.map(drink => {
      return { ...drink, owner: users[0]._id }
    })
    console.log(users.length)

    // create drinks using drinkData
    const drinks = await Drink.create(drinksWithAddedUsers)
    console.log(`🌱 DB seeded with ${drinks.length} drinks`)

    // closing the connection 
    await mongoose.connection.close()
    console.log('✌🏽 bye')

  } catch (err) {
    console.log('Error:', err)
    console.log('🆘 something has gone wrong')
    await mongoose.connection.close()
    console.log('💃🏽 bye')
  }
}

seedDatabase()