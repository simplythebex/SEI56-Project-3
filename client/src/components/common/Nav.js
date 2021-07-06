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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <div className="navbar-left"> */}
        <Navbar.Brand href="/">Heiss</Navbar.Brand>
        {/* </div> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <div className="navbar-right"> */}
            <Navbar.Link href="/drinks">Our Coffees</Navbar.Link>
            <Navbar.Link href="/drinks">Our Teas</Navbar.Link>
            <Navbar.Link href="#index">Order Online</Navbar.Link>
            <Navbar.Link href="/heiss-room">Heiss Room</Navbar.Link>
            <Navbar.Link href="/aboutus">About us</Navbar.Link>
          </Nav>
          <Nav>
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
          </Nav>
          
          {/* </div> */}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>





  )
}
export default Nav