import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from './common/Nav.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
// import { getTokenFromLocalStorage } from './helpers/auth'
import { useHistory } from 'react-router-dom'



const DrinkShow = () => {
  const [drink, setDrink] = useState({})
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  const history = useHistory()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/drinks/${id}`)
        setDrink(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  console.log(drink)

  const handleChange = (event) => {
    console.log('changed=>', event.target.value)
    setQuantity(event.target.value)
  }

  const handleCart = async (event) => {
    event.preventDefault()
    const total = quantity * drink.price
    const formData = {
      drinkId: drink._id,
      quantity: parseInt(quantity),
      price: drink.price,
      total: total,
    }

    console.log('My form data=>', formData)
    
    try {
      await axios.post(
        `/api/shopped-drinks/${drink._id}`,
        formData
        // {
        //   headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        // }
      )
      history.push('/shop-drink')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/drinks">Browse Drinks</Breadcrumb.Item>
        <Breadcrumb.Item active>{drink.drink}</Breadcrumb.Item>
      </Breadcrumb>


      <Container className="show-drink" fluid>
        <div className="image-text">
          {/* <div className="image"> */}
          <img
            alt={drink.drink}
            src={drink.image}
          /> 
          {/* </div> */}
          <div className="right">
            <Container className="title" style={{ width: '100' }}>
              <h2>{drink.drink}</h2>
              <h4 className="origin">Origin: <span className="country-name">{drink.country}</span></h4>
            </Container>
            <Container className="content" style={{ width: '100' }}>
              <h4>Description</h4>
              <p className="description">
                {drink.description}
              </p>
              <p className="averageRating"><span>Average rating: </span>{drink.avgRating}</p>
              <p className="averageRating"><span>Price: £</span>{drink.price}</p>
              <p className="averageRating"><span>Quantity: </span><input name="quantity" value={quantity} onChange={handleChange}></input></p>
              <Container className="buttons" fluid>
                <Button variant="outline-warning" onClick={handleCart}>Add to basket</Button>{' '}
              </Container>
            </Container> 
          
          </div>
        
        </div>
      </Container>
      
      <Container className="footer" fluid>
        <Row>
          <Col>Map</Col>
        </Row>
      </Container>
      
    </>
  )



}

export default DrinkShow



