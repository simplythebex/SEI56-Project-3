import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const CartTally = ({ CartIcon }) => {

  return (
    <Container fluid sticky="top" className='nav-container-pages'>
      <Nav />
      <div className='cart-style'>
        <span>
              Cart
          <span className='cartlogo'>0</span>
        </span>
        <Link to='/shop-drink' className='cart-link'>
          <img src={CartIcon} alt='' width='20'/>
        </Link>
      </div>
    </Container>
  )
}

export default CartTally

