import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from './common/Nav.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import vietnamese from '../styles/images/vietnamese.jpeg'
import Figure from 'react-bootstrap/Figure'



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
      
      <Container className='show' fluid>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                alt={drink.drink}
                src={vietnamese}
              /> 
            </Figure>
          </Col>
          <Col className="right">
            <Container className="title" style={{ width: 'auto' }}>
              <h2>{drink.drink}</h2>
              <h3 className="mb-2 text-muted">{drink.country}</h3>
            </Container>
            <Container className="content" style={{ width: 'auto' }}>
              <h4>Description</h4>
              <p>
                {drink.description}
              </p>
              <p><span>Average rating: </span>{drink.avgRating}</p>
            </Container> 
          
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>Footer</Col>
        </Row>
      </Container>
    </>
  )



}

export default DrinkShow



