import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const DisplayDrinks = ({ drinks, filteredDrinks }) => {
  console.log('displayed drinks', filteredDrinks)
  
  return (
    <Col className="right-api">
      <p className=""></p>
      <Row>
        {drinks.map(drink => {
          return (
            <Card key={drink._id} style={{ width: '16rem' }}>
              <Card.Img variant="top" src={drink.image} />
              <Card.Header as="h3">
                {drink.drink}
                      
                <Card.Title as="h6">{drink.country}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{drink.description}</Card.Text>
                <Card.Text></Card.Text>
                <Button variant="primary">More info</Button>
              </Card.Body>
            </Card>
          )
                  
        })}
      </Row>
    </Col>
  )
    
  
}

export default DisplayDrinks