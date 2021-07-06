import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import DisplayDrinks from './index/_DisplayDrinks.js'
import DisplayChecked from './index/_DisplayChecked.js'




const DrinksIndex = () => {
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState(drinks)
  const [filteredOrigins, setFilteredOrigins] = useState(drinks.origin)
  const [hasError, setHasError] = useState(false)
  const typesOfDrinks = ['All']
  const placesOfOrigin = ['All']
  let type = 'All'
  let origin = 'All'
  const searchDrinks = ''
  const searchOrigin = ''
  

  //* request to API on first render
  useEffect(() => {
    const getData = async () =>{
      try {
        const { data } = await axios.get('/api/drinks')
        setDrinks(data)
      } catch (err) {
        setHasError(true)
        
      }
    }
    getData()
  }, [])

  //* default display for 'All' drink types
  const getTypes = () => {
    drinks.map(drink => {
      if (!typesOfDrinks.includes(drink.type)) {
        typesOfDrinks.push(drink.type) 
      }
    })
  }

  //* filter drinks
  const filterDrinks = () => {
    const regexSearch = new RegExp(searchDrinks, 'i')
    console.log('regenSearch ->', regexSearch)
    const filteredArray = drinks.filter(drink => {
      return (
        regexSearch.test(drink.drink) && (drink.type === type || type === 'All')
      )
    })
    setFilteredDrinks(filteredArray)
    console.log('DRINKS ARRAY FILTERED->', filteredArray) //here data passed fine
  }


  // * sets type whe checkbox is handleChecked

  const handleChecked = (event) => {
    type = event.target.value
    filterDrinks()
    console.log('BUTTONS EVENT TARGET VALUE ->', event.target.value)
  }


  // * default display for 'All' origin regions

  const getOrigins = () => {
    drinks.map(drink => {
      if (!placesOfOrigin.includes(drink.origin)) {
        placesOfOrigin.push(drink.origin) 
      }
    })
  }

  // * filter drinks 
  const filterOrigins = () => {
    const regexSearch = new RegExp(searchOrigin, 'i')
    console.log('regenSearch ->', regexSearch)
    const filteredArray = drinks.filter(drink => {
      return (
        regexSearch.test(drink.drink) && (drink.origin === origin || origin === 'All')
      )
    })
    setFilteredOrigins(filteredArray)
    console.log('ORIGINS ARRAY FILTERED->', filteredArray) // nothing in this filtered array
  }

  // * sets origin when dropdown selected

  const handleChosenOrigin = (event) => {
    origin = event.target.value
    filterOrigins()
    console.log('DROPDOWN EVENT TARGET VALUE ->', event.target.value)
  }



  getTypes()
  getOrigins()
  
  return (
    <>
      <Container fluid className="nav-container-pages">
        <Nav />
      </Container>
      <Container fluid className="index-wrapper">

        <Row fluid className="align-items-center index-hero-row">
        
          <Col className="index-hero-txt">
            <article>
              <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr&apos;s standard 1960s with the release of Letraset sheets containing Lore.</p>
            </article>
          </Col>
          <Col className="index-hero-img">
          </Col>
        </Row>

        {/* Breadcrumbs for navigation */}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Browse Drinks</Breadcrumb.Item>
        </Breadcrumb>

        { drinks ?
          <>
            <DisplayChecked 
              typesOfDrinks = {typesOfDrinks}
              handleChecked = {handleChecked}
              handleChosenOrigin = {handleChosenOrigin}
              placesOfOrigin = {placesOfOrigin}
            />
            <hr className="grey-breakline"></hr>
            <Container className="api-wrapper">
              <Row className="api-section">
                <DisplayDrinks 
                  drinks = {drinks}
                  filteredDrinks = {filteredDrinks}
                  filteredOrigins = {filteredOrigins}
                />
              </Row>
            </Container>
            <Container fluid className="index-footer">
              <h4>Made with ❤️ by the Heiss gang.</h4>
            </Container>
          </>

          :  
          <h3>
            { hasError ? 'Oops,. something went wrong!' : 'Loading...' }
          </h3>
        }

      </Container>
    </>
  )

}
export default DrinksIndex