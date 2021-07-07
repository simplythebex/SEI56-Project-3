import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../common/Nav.js'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CartIcon from '../../styles/images/cart.svg'
import { Link } from 'react-router-dom'

const ShopDrink = () => {

  const [shoppedDrinks, setShoppedDrinks ] = useState([])

  // gets data from suggested drink api
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/shopped-drinks')
      console.log('DATA', data)
      setShoppedDrinks(data)
    }
    getData()
  }, [])

  const handleDelete = (event) => {
    console.log('changed=>', event.target.value)
    const getDelete = async () => {
      const { data } = await axios.delete(`/api/shopped-drinks/${event.target.value}`)
      console.log('MYDATA', data)
      if (data === 'success') {
        const { data } = await axios.get('/api/shopped-drinks')
        console.log('RESULT', data)
        setShoppedDrinks(data)
      }
    }
    getDelete()
  }


  return (
    <Container className='cart-wrapper'>
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

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/drinks">Browse Drinks</Breadcrumb.Item>
        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
      </Breadcrumb>

      <div className='cartpage'>
        <div className='cartpage-main'>
          {shoppedDrinks.map(drink => {
            if (drink !== null) {
              return (
                <>
                  <div><img src={drink[0].image}></img></div>
                  <div>{drink[0].drink}</div>
                  <div>£{drink[0].price}</div>
                  <div>{drink[1].quantity}</div>
                  <div>{drink[1].total}</div>
                  <div><button value={drink[1]._id} onClick={handleDelete}>Delete</button></div>
                </>
              )
            }
          })}
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ShopDrink