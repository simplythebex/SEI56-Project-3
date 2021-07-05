import axios from 'axios'
import React, { useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from './helpers/auth'

const UserProfile = () => {
  const { id } = useParams()

  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/profile/${id}`, 
          { 
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          }
        )
        console.log('res', res)
      } catch (err) {
        console.log('err', err)
      }
      
    }

    getData()

  }, [id])








  return (
    <>
      
      <h1>User Profile</h1>

    </>
  )




}

export default UserProfile



