import React from 'react'
// import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// import Figure from 'react-bootstrap/Figure'

const Nav = () => {
  return (
    <Navbar expand="lg">
      <div className="main">
        <Row>
          <Col>
            <div className="navbar-left">
              <Navbar.Brand href="#home">Heiss</Navbar.Brand>
            </div>
          </Col>
          <Col className="column">
            <div className="navbar-right">
              <Navbar.Brand href="#index">Our coffees</Navbar.Brand>
              <Navbar.Brand href="#index">Our teas</Navbar.Brand>
              <Navbar.Brand href="#index">Order online</Navbar.Brand>
              <Navbar.Brand href="#index">Heiss room</Navbar.Brand>
              <Navbar.Brand href="#index">About us</Navbar.Brand>
            </div>
          </Col>
          <Col>
            <div className="navbar-right-right">
              <Button variant="outline-light register">Sign up</Button>{' '}
              <Button variant="outline-light login">Login</Button>{' '}
            </div>
          </Col>
        </Row>
      </div>
    </Navbar>
  )
}
export default Nav