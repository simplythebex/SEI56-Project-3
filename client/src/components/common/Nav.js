import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Figure from 'react-bootstrap/Figure'
import { getPayload } from '../helpers/auth'
import Button from './navbar/Button.js'

const Nav = () => {
  const [click, setClick] = useState(false)

  const history = useHistory()

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
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign up
              </Link> 
            </li>
          </ul>
          <Button />
        </nav>
      </div>
      

    </>    
  // {!userIsAuthenticated() ?
  //   :
  //     <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
  // }

  )
}
export default Nav