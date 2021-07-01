import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Drink from '../models/drink.js'
import drinkData from './data/drinks.js'

const seedDatabase = async () => {
  try {
    // connect to db 
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DB connected in seeds')

    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍🏽 DB dropped')

    // create drinks using drinkData
    const drinks = await Drink.create(drinkData)
    console.log(`🌱 DB seeded with ${drinks.length} drinks`)

    // closing the connection 
    await mongoose.connection.close()
    console.log('✌🏽 bye')

  } catch (err) {
    console.log(err)
    console.log('🆘 something has gone wrong')
    await mongoose.connection.close()
    console.log('💃🏽 bye')
  }
}

seedDatabase()