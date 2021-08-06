import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { Link, useHistory } from 'react-router-dom'
import NavHomepage from './common/NavHomepage.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
import { getTokenFromLocalStorage } from './helpers/auth.js'
import Row from 'react-bootstrap/Row'
import Footer from './common/Footer.js'

const UserProfile = () => {
  const [userInfo,  setUserInfo] = useState([])
  const [profileInfo, setProfileInfo] = useState([])
  
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

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/profile',
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          })
        setProfileInfo(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])
  console.log('profileInfo', profileInfo)
  
  // Logout 
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>
      <Container fluid className="main-container">
        <Container className="header">
          <Breadcrumb className="show-drink-breadcrumb">
            <Breadcrumb.Item href="./.">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
          
        </Container>
        <Container className="profile-page-logout">
          <div className="user-welcome">
            <img src={profileInfo.image} alt={profileInfo.username} />
            <div className="welcome-text">
              <h3 className="title">Welcome {profileInfo.username}, here are the drinks you suggested.</h3>
              <h4 className="small">Select a drink to edit or delete</h4>
            </div>
          </div>
          <button className="logout" variant="primary" onClick={handleLogout} size="sm">Logout</button>{' '}
        </Container>
        <hr />
        
          
        <Container fluid className="createdItems">
          
          {userInfo.map(info => {
            return (
              <>
                {
                  info.owner.id === profileInfo._id 
                    ?
                    <Row>
                      <Col className="suggestions">
                        <Row className="suggestions-row">
                          <Link className="linkToShowSuggestion"to={`/profile/${info._id}`}>
                            <Card style={{ width: '18rem' }}>
                              <Card.Header as="h5" key={info.drink}>{info.drink}</Card.Header>   
                              <Card.Img height={200} variant="top" alt={info.drink} src={info.image} />                     
                            </Card>
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                    :
                    <div></div>
                }
              </>
            )
          })}
            

        </Container>
      </Container>
      <Footer />
    </>
  )




}

export default UserProfile



