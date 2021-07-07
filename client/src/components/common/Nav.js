import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
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
          <Navbar.Brand href="/heiss-room">Heiss Room</Navbar.Brand>
          <Navbar.Brand href="#index">About us</Navbar.Brand>
          {!userIsAuthenticated() ?
            <>
              <Navbar.Brand className="login-register" href="/register">Sign up</Navbar.Brand>
              <Navbar.Brand className="login-register" href="/login">Login</Navbar.Brand>
            </>
            :
            <>
              <Button variant="outline-light " onClick={handleLogout} size="sm">Logout</Button>{' '}
            </>
          }
        </div>
      </Container>
    </Navbar>
  )
}
export default Nav