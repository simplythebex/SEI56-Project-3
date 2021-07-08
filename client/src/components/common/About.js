import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavHomepage from '../common/NavHomepage'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

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
        <Row>
          <Col className="about-title">About this project</Col>
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
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>Bootstrap</li>
              </ul>
            </Row>
          </Col>

        </Row>
      </Container>
      
    </>
  )

}

export default About 