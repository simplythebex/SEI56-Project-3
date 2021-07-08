import React, { useState } from 'react'
import Nav from './Nav.js'
import { Link, useHistory } from 'react-router-dom'
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
import { getPayload } from '../helpers/auth.js'
import { Modal } from 'react-bootstrap'
// import bighair from '../../styles/images/bighair.png'
// import footer from '../../styles/images/footer.png'
import LoginBox from '../auth/LoginBox.js'

const Home = () => {

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


  return (
    <>
      <div className="homepage">
        <Container fluid className='hero'>
          <Nav />
          <div className='hot'>
            <h2>Hot Drinks 
              <br/>Around The World</h2>
            <div>
              <div className='paragraph'>
                <p>Your favourite tea and coffee.</p>
                <Button variant='outline-light' onClick={handleClick}><span>Suggest Hot Drinks</span></Button>{' '}

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

                <Link to="/drinks">
                  <Button variant='warning'><span>Shop Hot Drinks</span></Button>{' '}
                </Link>
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
                  <h2>Tea Or Coffee,
                    <br/>We Have You covered.
                  </h2>
                </div>
                <div className='covered'>
                  <p>We Heiss - a revolutionary hot drink service that delivers quality coffee or tea in minutes. With our carefully curated products, we have got everything you need: from Cuban espresso to pink tea, to Maghrebi mint tea and Cafe de Olla, browse and order.</p>
                </div>
              </div>

              <CardGroup >
                <Card style={{ width: '20rem' }} className="need-choose-receive">
                  <Card.Img variant='top' />
                  <Figure.Image
                    alt='Need'
                    src={Need}
                  />
                  <Card.Body>
                    <Card.Title>1. Need</Card.Title>
                    <Card.Text>
                    Quality Drinks
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }} className="need-choose-receive">
                  <Card.Img variant='top' />
                  <Figure.Image
                    alt='Choose'
                    src={Choose}
                  />
                  <Card.Body>
                    <Card.Title>2. Choose</Card.Title>
                    <Card.Text>
                    From Carefully <br/> Curated Products
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className="need-choose-receive">
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

          <Carousel fade>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={greentea}
                alt="First slide"
                width={500}
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={ladydrinks}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={mandrinks}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={crossleg}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>

          <div className='paragraph'>
            <Link to="/register">
              <Button variant='warning' className="button">Join Our Community</Button>{' '}
            </Link>
          </div>

          {/* <AnimatedMap /> */}
          
        </Container>
      </div>
      <div className='footer'>
        <p>Made with 🖤 by the Heiss team</p>
      </div>

    </>     
  )
}
export default Home