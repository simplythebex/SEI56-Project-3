import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavHomepage from '../common/NavHomepage'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Footer from './Footer'

const About = () => {

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>



      
      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="about-page">
        {/* <Row>
          <Col className="about-title">About this project</Col>
        </Row> */}
        <Row>
          <Col className="about-copy">
            <>
              <p>Hi! 👋  We are &#8216;Heiss&#8217;, a group four students in General Assembly&#39;s Software Engineer Immersion course in London.
                <br/>
              &#8216;Heiss&#8217; or &#8216;Heiß&#8217;, is German for &#8216;Hot&#8217;, which is how we like our drinks.
                <br/>
              This group project had us build a Full-Stack React app in 10 days, utalising stuff we learned in the course, experience team work, and we anjoyed it alot!
              </p>
            </>
          </Col>
        </Row>
        <Row className="information">
          <Col className="names">
            <Row className="subtitle">The Heiss Team</Row>
            <Row className="bex">
              <a href="https://github.com/simplythebex" rel="noreferrer"target="_blank"><i className="fab fa-github"></i> Bex Jones</a>
            </Row>
            <Row className="daria">
              <a href="https://github.com/daria-kafler" rel="noreferrer"target="_blank"><i className="fab fa-github"></i> Daria Kafler</a>
            </Row>
            <Row className="ole">
              <a href="https://github.com/eintrittfrei" rel="noreferrer"target="_blank"><i className="fab fa-github"></i> Ole Nascimento</a>
            </Row>
            <Row className="victoria">
              <a href="https://github.com/victoriaolanipekun" rel="noreferrer"target="_blank"><i className="fab fa-github"></i> Victoria Olanipekun</a>
            </Row>
          </Col>
          <Col className="project">
            <Row className="subtitle">Technologies Used:</Row>
            <Row>
              <ul>
                <li>JavaScript ES6</li>
                <li>HTML5</li>
                <li>SCSS</li>
                <li>React Bootstrap CSS Framework</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>Bcrypt</li>
                <li>JWT</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Trello</li>
                <li>Yarn</li>
                <li></li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )

}

export default About 