import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SuggestedDrinkCard from './SuggestedDrinkCard'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NavHomepage from '../common/NavHomepage'
import Container from 'react-bootstrap/Container'
import Footer from '../common/Footer'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { getPayload } from '../helpers/auth'
import LoginBox from '../auth/LoginBox'


const HeissRoom = () => {

  const [suggestedDrinks, setSuggestedDrinks ] = useState([])


  const history = useHistory()


  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false 
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const handleClick = () => {
    if (!userIsAuthenticated()) {
      console.log('not authenticated')
      handleShow()
    } else {
      console.log('authenticated')
      history.push('/suggest-drink')
    }
  }


  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // gets data from suggested drink api
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/suggested-drinks')
      console.log('DATA', data)
      setSuggestedDrinks(data)
    }
    getData()
  }, [])

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Heiss room</Breadcrumb.Item>
      </Breadcrumb>

      <Modal 
        size="lg"
        show={show} 
        onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Please log in to suggest a drink</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginBox 
            path = '/suggest-drink'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>



      <div className="heiss-room-wrapper">
        <Container className="sorting-row-wrapper">
          <Col className="shop-drinks">
            <h3 className="shop-drinks-h3">Heiss Room</h3>
          </Col>
          <Col xs={7} className="sorting-buttons">
            <button to ="/suggest-drink" className="filter-btn-coffee" onClick={handleClick}>Suggest A Drink</button>
          </Col>
        </Container>
        <hr />
        <div className="drink-wrapper">
          {suggestedDrinks.reverse().map(drink => {
            return <SuggestedDrinkCard
              key={drink.id}
              { ...drink } />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HeissRoom