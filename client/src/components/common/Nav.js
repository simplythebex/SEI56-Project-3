import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'
import { getPayload } from '../helpers/auth'

const Nav = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false 
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }


  return (
    <Navbar expand="lg">
      <Container>
        <div className="navbar-left">
          <Navbar.Brand href="/">Heiss</Navbar.Brand>
        </div>
        <div className="navbar-right">
          <Navbar.Brand href="#index">Our Coffees</Navbar.Brand>
          <Navbar.Brand href="#index">Our Teas</Navbar.Brand>
          <Navbar.Brand href="#index">Order Online</Navbar.Brand>
          <Navbar.Brand href="#index">Heiss Room</Navbar.Brand>
          <Navbar.Brand href="#index">About us</Navbar.Brand>
          {!userIsAuthenticated() ?
            <div className="buttons">
              <Link to="/register">
                <Button variant="outline-light">Sign up</Button>{' '}
              </Link>
              <Link to="/Login">
                <Button variant="outline-light">Login</Button>{' '}
              </Link>
            </div>
            :
            <div className="buttons">
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>{' '}
            </div>
          }
        </div>
      </Container>
    </Navbar>
  )
}
export default Nav