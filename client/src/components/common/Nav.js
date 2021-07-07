import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { getPayload } from '../helpers/auth'
import Button from './navbar/Button.js'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const Nav = () => {
  const [click, setClick] = useState(false)

  // const history = useHistory()
  const [userInfo, setUserInfo] = useState([])

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

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
    <>
      <div className="container-fluid">
        <nav className="Navbar-wrapper">
          <Link to="/" className="navbar-logo">
          Heiss
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/drinks" className="nav-links" onClick={closeMobileMenu}>
                Our Drinks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#index" className="nav-links" onClick={closeMobileMenu}>
                Order Online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/heiss-room" className="nav-links" onClick={closeMobileMenu}>
                Heiss Room
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            {!userIsAuthenticated() ? 
              <>
                <li className="nav-item">
                  <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Sign up
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Login
                  </Link> 
                </li>
              </>
              :
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
            }
          </ul>
          <Button />
        </nav>
      </div>
      

    </>    

  )
}
export default Nav