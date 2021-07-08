import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SuggestedDrinkCard from './SuggestedDrinkCard'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NavHomepage from '../common/NavHomepage'
import Container from 'react-bootstrap/Container'
import Footer from '../common/Footer'

const HeissRoom = () => {

  const [suggestedDrinks, setSuggestedDrinks ] = useState([])

  // gets data from suggested drink api
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/suggested-drinks')
      console.log('DATA', data)
      setSuggestedDrinks(data)
    }
    getData()
  }, [])

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Heiss room</Breadcrumb.Item>

      </Breadcrumb>
      <div className="heiss-room-wrapper">
        <div className="drink-wrapper">
          {suggestedDrinks.map(drink => {
            return <SuggestedDrinkCard
              key={drink.id}
              { ...drink } />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HeissRoom