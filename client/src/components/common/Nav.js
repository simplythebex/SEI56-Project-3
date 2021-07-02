import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/register">
            <Button variant="outline-light">Sign up</Button>{' '}
          </Link>
          <Link to="/Login">
            <Button variant="outline-light">Login</Button>{' '}
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}
export default Nav