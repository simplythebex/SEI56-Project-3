import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'

const Nav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <div className="navbar-left">
          <Navbar.Brand href="#home">Heiss</Navbar.Brand>
        </div>
        <div className="navbar-right">
          <Navbar.Brand href="#index">Our Coffees</Navbar.Brand>
          <Navbar.Brand href="#index">Our Teas</Navbar.Brand>
          <Navbar.Brand href="#index">Order Online</Navbar.Brand>
          <Navbar.Brand href="#index">Heiss Room</Navbar.Brand>
          <Navbar.Brand href="#index">About us</Navbar.Brand>
          <Button variant="outline-light">Sign up</Button>{' '}
          <Button variant="outline-light">Login</Button>{' '}
        </div>
      </Container>
    </Navbar>
  )
}
export default Nav