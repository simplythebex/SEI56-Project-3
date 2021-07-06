import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from './Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const About = () => {

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>



      
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
      <Container >
        <Row>
          <Col>This is the title section</Col>
        </Row>
        <Row>
          <Col clasName="names">
            <Row>
              <span>name and <span>socials icons</span></span>
            </Row>
            <Row>
              <span>name and <span>socials icons</span></span>
            </Row>
            <Row>
              <span>name and <span>socials icons</span></span>
            </Row>
          </Col>
          <Col className="project">
            <Row>technologies used</Row>
            <Row>link to readme</Row>
          </Col>
        </Row>
      </Container>
      
    </>
  )

}

export default About 