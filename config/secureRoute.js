import jwt from 'jsonwebtoken'
import { secret } from './environment.js'
import User from '../models/user.js'


export const secureRoute = async (req, res, next) => {
  try {
    // check token exists in header
    if (!req.headers.authorization) throw new Error('Missing headers')
    //Remove unwanted characters from header
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token', token)
    //Payload 
    const payload = jwt.verify(token, secret)
    console.log('payload', payload)
    //find user based on id in payload 
    const userToVerify = await User.findById(payload.sub)
    //check user exists
    if (!userToVerify) throw new Error('User not found')

    console.log(userToVerify)
    
    req.currentUser = userToVerify 

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}