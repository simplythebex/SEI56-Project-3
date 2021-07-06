import React, { useEffect, useState, } from 'react' 
import axios from 'axios'
import { useParams,  useHistory } from 'react-router-dom'
import Nav from './common/Nav.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import { getTokenFromLocalStorage } from './helpers/auth.js'



const SuggestedDrinkShow = () => {
  const [drink, setDrink] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/suggested-drinks/${id}`)
        setDrink(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  console.log(drink)

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/suggested-drinks/${id}`, {
        headers: { 
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      history.push('/profile')
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
              <Container className="buttons" fluid>
                <Button className="outline-light" variant="warning">Edit</Button>
                <Button onClick={handleDelete} variant="warning">Delete</Button>
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

export default SuggestedDrinkShow



