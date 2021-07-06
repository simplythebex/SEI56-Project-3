import axios from 'axios'
import React, { useEffect, useState } from 'react' 
// import { useParams } from 'react-router-dom'
// import { getTokenFromLocalStorage } from './helpers/auth'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { getTokenFromLocalStorage } from './helpers/auth.js'

const UserProfile = () => {
  const [userInfo,  setUserInfo] = useState([])

  

  
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
  

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/api/suggested-drinks/${id}`, 
  //     headers: {
  //       Authorization: `Bearer ${getTokenFromLocalStorage()}`
  //     }
  //     )


  //   } catch (err) {
  //     consolele.log(err)
  //   }
  // }



  return (
    <>
      <div className="nav-container-pages">
        <Nav />
      </div>
      <Container className="main-container">
        <Breadcrumb className="breadcrump">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <h3>Your suggestions</h3>
        <Container className="createdItems">
          <Col>
            {userInfo.map(info => {
              return (
                <>
                  <Container className="suggestions">
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title><p key={info.drink}>{info.drink}</p></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><p key={info.type}>{info.type}</p></Card.Subtitle>
                        <Card.Text>
                      
                        </Card.Text>
                        <Button className="outline-light" to="/suggest"variant="warning">Edit</Button>
                        <Button variant="warning">Delete</Button>
                      </Card.Body>
                    </Card>
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



