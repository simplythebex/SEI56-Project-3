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
  
  



  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>
      <Container className="main-container">
        <Container className="header">
          <Breadcrumb className="breadcrump">
            <Breadcrumb.Item href="./.">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <Button className="logout" variant="warning" onClick={handleLogout} size="sm">Logout</Button>{' '}
          <hr />
        </Container>
        <Container className="createdItems">
          <h3 className="title">Your suggestions</h3>
          <Col className="createdItemsColumn">
            {userInfo.map(info => {
              return (
                <>
                  <Container className="suggestions">
                    <Link to={`/profile/${info._id}`}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title><p key={info.drink}>{info.drink}</p></Card.Title>
                          <Card.Subtitle className="mb-2 text-muted"><p key={info.type}>{info.type}</p></Card.Subtitle>
                          <Card.Text>                  
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Container>
                </>
              )
            })}
          </Col>

        </Container>
      </Container>
    </>
  )




}

export default UserProfile



