import React from 'react'
import Nav from './Nav.js'
import Container from 'react-bootstrap/Container'
import style from '../../styles/images/style.png'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

const Home = () => {
  return (
    <>
      <Container fluid className="hero">
        <Nav />
        <Container>
          <h2>Hot Drinks Around The World</h2>
          <p>Your favourite tea and coffee.</p>
          <Container>
            <Button variant="outline-light">Suggest Hot Drinks</Button>{' '}
            <Button variant="warning">Shop Hot Drinks</Button>{' '}
          </Container>
        </Container>
      </Container>
      <Figure>
        <Figure.Image
          alt="zig-zag"
          src={style}
        /> 
      </Figure>
    </>
  )
}
export default Home