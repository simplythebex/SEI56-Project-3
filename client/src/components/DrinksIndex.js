import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import DisplayDrinks from './index/_DisplayDrinks.js'
import DisplayChecked from './index/_DisplayChecked.js'
import SortingRow from './index/_SorterRow.js'



const DrinksIndex = () => {
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState(drinks)
  // const [hasError, setHasError] = useState(false)
  const typesOfDrinks = ['All']
  let type = 'All'
  const search = ''
  

  // request to API on first render
  useEffect(() => {
    const getData = async () =>{
      try {
        const { data } = await axios.get('/api/drinks')
        setDrinks(data)
      } catch (err) {
        // setHasError(true)
        
      }
    }
    getData()
  }, [])

  // default display for 'All', creates array of types of drinks
  const getTypes = () => {
    drinks.map(drink => {
      if (!typesOfDrinks.includes(drink.type)) {
        typesOfDrinks.push(drink.type)
      }
    })
  }

  // filter drinks
  const filterDrinks = () => {
    const regexSearch = new RegExp(search, 'i')
    // console.log('regenSearch ->', regexSearch)
    const filteredArray = drinks.filter(drink => {
      return (
        regexSearch.test(drink.drink) && (drink.type === type || type === 'All')
      )
    })
    setFilteredDrinks(filteredArray)
  }


  //sets type whe checkbox is handleChecked
  const handleChecked = (event) => {
    type = event.target.value
    filterDrinks()
  }

  getTypes()

  console.log('filteredDrinks>', filteredDrinks)
  return (
    <Container fluid className="index-wrapper">
      <Nav />
      <Row fluid>
        
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

      {/* Row with tea/coffee sort buttons and sory by dropdown */}
      <SortingRow />

      {/* Left side - Filters section */}

      <Container className="api-wrapper">
        <Row className="api-section">
          <hr className="grey-breakline"></hr>
          <Col className="left-filters">

            <DisplayChecked 
              typesOfDrinks = {typesOfDrinks}
              handleChecked = {handleChecked}
            />
          </Col>

          {/* Right side - API display section */}
          
          <DisplayDrinks 
            drinks = {drinks}
            filteredDrinks = {filteredDrinks}
          />

        </Row>
      </Container>
      <Container fluid className="index-footer">
      </Container>
    </Container>
  )

}
export default DrinksIndex