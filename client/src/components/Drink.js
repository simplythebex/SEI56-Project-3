import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from './common/Nav.js'


const DrinkShow = () => {
  const [drink, setDrink] = useState({})
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/drinks/${id}`)
        setDrink(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  console.log(drink)

  return (
    <>
      <Nav />
      <h1>{drink.drink}</h1>
    </>
  )



}

export default DrinkShow



