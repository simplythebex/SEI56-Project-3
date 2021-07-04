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
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'



const DrinksIndex = () => {
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState(drinks)

  useEffect(() => {
    const getData = async () =>{
      try {
        const { data } = await axios.get('/api/drinks')
        setDrinks(data)
        setFilteredDrinks(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  //filter drinks
  const handleFilter = (event) => {
    setFilteredDrinks(event)
  }



  // console.log('drinks on state>', drinks)
  return (
    <Container fluid className="index-wrapper">
      <Nav sticky="top"/>
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

      {/* Row with ctea/coffee sort buttons and sory by dropdown */}
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
            <Button className="btn-filters" variant="link">
              <img alt src="../styles/assets/filter-filled-tool-symbol.png" width="18" height="18"></img>
              Filters
            </Button>
            <Button className="btn-filters-clear" variant="link">Clear All</Button>
            <h3 className="filter-name">Type</h3>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Teas" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Coffees" />
            </Form.Group>
            
            <h3 className="filter-name">Origin</h3>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Africa" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Americas" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Asia" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Europe" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Oceania" />
            </Form.Group>

          </Col>

          {/* Right side - API display section */}
          
          <Col className="right-api">
            <p className=""></p>
            <Row>
              {drinks.map(drink => {
                return (
                  <Card key={drink._id} style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={drink.image} />
                    <Card.Header as="h3">
                      {drink.drink}
                    
                      <Card.Title as="h6">{drink.country}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{drink.description}</Card.Text>
                      <Card.Text></Card.Text>
                      <Button variant="primary">More info</Button>
                    </Card.Body>
                  </Card>
                )
                
              })}
            </Row>
            
            

          </Col>
        </Row>
      </Container>
    </Container>
  )

}
export default DrinksIndex