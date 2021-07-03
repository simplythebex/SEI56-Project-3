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

const DrinksIndex = () => {
  const [drinks, setDrinks] = useState([])


  useEffect(() => {
    const getData = async () =>{
      try {
        const { data } = await axios.get('/api/drinks')
        setDrinks(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('drinks on state>', drinks)
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

      {/* Common filters row, with sorting and title */}
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
      <Container className="api-wrapper">
        <Row className="api-section">
          <Col className="left-filters">
            <h3>test text</h3>
          </Col>
          <Col className="right-api">
            <h3>test text</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  )

}
export default DrinksIndex