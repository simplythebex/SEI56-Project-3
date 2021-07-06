import React from 'react'
import Nav from './Nav.js'
// import AnimatedMap from './AnimatedMap.js'
import Container from 'react-bootstrap/Container'
import style from '../../styles/images/style.png'
import Happy from '../../styles/images/Happy.png'
import Need from '../../styles/images/Need.png'
import Choose from '../../styles/images/Choose.png'
import Receive from '../../styles/images/Receive.png'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import greentea from '../../styles/images/greentea.png'
import ladydrinks from '../../styles/images/ladydrinks.png'
import mandrinks from '../../styles/images/mandrinks.png'
import crossleg from '../../styles/images/crossleg.png'
// import bighair from '../../styles/images/bighair.png'
// import footer from '../../styles/images/footer.png'

const Home = () => {

  return (
    <>
      <Container fluid className='hero'>
        <Nav />
        <div className='hot'>
          <h2>Hot Drinks 
            <br/>Around The World</h2>
          <div>
            <div className='paragraph'>
              <p>Your favourite tea and coffee.</p>
              <Button variant='outline-light'><span>Suggest Hot Drinks</span></Button>{' '}
              <Button variant='warning'><span>Shop Hot Drinks</span></Button>{' '}
            </div>
          </div>
        </div>
      </Container>
      
      <Figure className='zig-zag'>
        <Figure.Image
          alt='zig-zag'
          src={style}
        /> 
      </Figure>

      <Container className='divider'></Container>

      <Container fluid className='choice'>
        <Row>
          <Col xs={12} md={8}>
            <div className='choice-wrapper'>
              <div className='drink'>
                <h2>Coffee Or Tea,
                  <br/>We Have You covered.
                </h2>
              </div>
              <div className='covered'>
                <p>We Heiss - a revolutionary hot drink service that delivers quality cofee or tea in minutes. With 2000+ carefully curated products, we got everything you need: from Cuban espresso to pink tea, to Maghrebi mint tea and Cafe de Olla, browse and order.</p>
              </div>
            </div>

            <CardGroup >
              <Card>
                <Card.Img variant='top' />
                <Figure.Image
                  alt='Need'
                  src={Need}
                />
                <Card.Body>
                  <Card.Title>1. Need</Card.Title>
                  <Card.Text>
                    Quality Coffee/Teas
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant='top' />
                <Figure.Image
                  alt='Choose'
                  src={Choose}
                />
                <Card.Body>
                  <Card.Title>2. Choose</Card.Title>
                  <Card.Text>
                    From Carefully 2000+ <br/>Curated Products{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant='top' />
                <Figure.Image
                  alt='Receive'
                  src={Receive}
                />
                <Card.Body>
                  <Card.Title>3. Receive</Card.Title>
                  <Card.Text>
                    Within Minutes 
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col xs={12} md={4}><div className='happy'>
            <Figure.Image
              alt='Happy'
              src={Happy}
            /> 
          </div></Col>
        </Row>
      </Container>

      <Container fluid className='room'>
        <div className='heiss-room'>
          <h2>
            Heiss Room
          </h2>
        </div>

        <Carousel>
          <Carousel.Item >
            <div className='review-card'>
              <p>
                I have never written a review
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='review-card'>
              <p>
                I have never written a review
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='review-card'>
              <p>
                I have never written a review
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className='review-card'>
              <p>
                I have never written a review
              </p>
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={greentea}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={ladydrinks}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={mandrinks}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={crossleg}
              alt="Third slide"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={bighair}
              alt="Third slide"
            />
          </Carousel.Item> */}
          <div className='paragraph'>
            <Button variant='warning'><span>Join Our Community</span></Button>{' '}
          </div>
        </Carousel>

        {/* <AnimatedMap /> */}
          
        <div className='footer'>
          <p>Made With ❤️</p>
        </div>
      </Container>

    </>     
  )
}
export default Home