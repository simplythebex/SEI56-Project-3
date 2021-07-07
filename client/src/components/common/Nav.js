import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Figure from 'react-bootstrap/Figure'
import { getPayload } from '../helpers/auth'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const Nav = () => {

  // const history = useHistory()
  const [userInfo, setUserInfo] = useState([])

  // const handleLogout = () => {
  //   window.localStorage.removeItem('token')
  //   history.push('/')
  // }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false 
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/profile', 
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          })
        setUserInfo(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])
  console.log('userinfo', userInfo)


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
          <Navbar.Brand href="/about">About us</Navbar.Brand>
          {!userIsAuthenticated() ?
            <>
              <Navbar.Brand className="login-register" href="/register">Sign up</Navbar.Brand>
              <Navbar.Brand className="login-register" href="/login">Login</Navbar.Brand>
            </>
            :
            <>
              <Link to="/profile" >
                <img
                  src={userInfo.image}
                  alt={userInfo.uername}
                  height={50}
                  width={50}
                  className="nav-bar-profile-image"
                />
                <Navbar.Brand clasName="login-register" href="/profile"> {userInfo.username}</Navbar.Brand>
              </Link>
              {/* <Button variant="outline-light " onClick={handleLogout} size="sm">Logout</Button>{' '} */}
            </>
          }
        </div>
      </Container>
    </Navbar>
  )
}
export default Nav