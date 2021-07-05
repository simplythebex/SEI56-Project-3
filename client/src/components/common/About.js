import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from './common/Nav.js'

const About = () => {

  return (
    <>
      <Container className="about-hero">
        <Nav/>
        <Container>
          <Row>
            <Col>Heiss gang</Col>
          </Row>
          <Row>
            <Col>Bex</Col>
            <Col>Daria</Col>
            <Col>Ole</Col>
            <Col>Victoria</Col>
          </Row>
        </Container>
      </Container>
      
    </>
  )

}

export default About 