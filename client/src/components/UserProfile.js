import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { Link, useHistory } from 'react-router-dom'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { getTokenFromLocalStorage } from './helpers/auth.js'
import Row from 'react-bootstrap/Row'

const UserProfile = () => {
  const [userInfo,  setUserInfo] = useState([])
  
  const history = useHistory()

  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/suggested-drinks')
        setUserInfo(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])
  console.log('userinfo', userInfo)
  
  // Logout 
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>
      <Container fluid className="main-container">
        <Container className="header">
          <Breadcrumb className="show-drink-breadcrumb">
            <Breadcrumb.Item href="./.">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <Button className="logout" variant="primary" onClick={handleLogout} size="sm">Logout</Button>{' '}
          
        </Container>
        <Container>
          <h3 className="title">Your suggestions</h3>
          <hr />
        </Container>
        
          
        <Container className="createdItems">
          
          {userInfo.map(info => {
            return (
              <>
              
                <Row>
                  <Col className="suggestions">
                    <Row className="suggestions-row">
                      <Link className="linkToShowSuggestion"to={`/profile/${info._id}`}>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" alt={info.drink} src={info.image} />
                          <Card.Header as="h5" key={info.drink}>{info.drink}</Card.Header>
                          <Card.Body>
                            <Card.Title>{info.origin}</Card.Title>
                            <Card.Subtitle className="mb-2 "><p key={info.type}>{info.type}</p></Card.Subtitle>
                            <Card.Text>                  
                            </Card.Text>
                          </Card.Body>
                        
                        </Card>
                      </Link>
                    </Row>
                  </Col>
                </Row>
              </>
            )
          })}
            

        </Container>
      </Container>
    </>
  )




}

export default UserProfile



