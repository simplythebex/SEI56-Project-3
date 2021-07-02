import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/drinks')
      setDrinks(data)
    }
    getData()
  }, [])

  return (
    <>
      {drinks.map(drink => <h1 key={drink._id}> {drink.drink} </h1>)}
      <h1>Hello world</h1>
    </>
  )
}

export default App
