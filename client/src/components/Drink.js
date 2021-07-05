import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from './common/Nav.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'



const DrinkShow = () => {
  const [drink, setDrink] = useState({})
  const { id } = useParams()


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

  return (
    <>
      <Nav />
      <Container className="show-drink" fluid>
        <Row className="image-text">
          <Col className="image-col image-container">
            <Figure className="image">
              <Figure.Image
                
                alt={drink.drink}
                src={drink.image}
              /> 
            </Figure>
          </Col>
          <Col className="right">
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
                <Button variant="outline-warning">Add to favorites</Button>{' '}
                <Button variant="outline-warning">Add to basket</Button>{' '}
              </Container>
            </Container> 
          
          </Col>
        
        </Row>
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



