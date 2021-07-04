import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DisplayDrinks from './index/_DisplayDrinks.js'
import DisplayChecked from './index/_DisplayChecked.js'



const DrinksIndex = () => {
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState(drinks)
  const [hasError, setHasError] = useState(false)
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
        setHasError(true)
        
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
    console.log('re ->', regexSearch)
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
      <Container className="sorting-row-wrapper">
        <Row className="buttons-row">
          <Col className="shop-drinks">
            <h3>Shop drinks</h3>
          </Col>
          <Col className="sorting-buttons">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Col>
          <Col className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>


      {/* Main drinks API section with filters */}
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
        <h2>Footer</h2>
      </Container>
    </Container>
  )

}
export default DrinksIndex