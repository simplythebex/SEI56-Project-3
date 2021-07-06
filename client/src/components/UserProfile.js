import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from './helpers/auth'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'

const UserProfile = () => {
  const [userInfo,  setUserInfo] = useState([])

  const { id } = useParams()

  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${id}`, 
          { 
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          }
        )
        setUserInfo(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [id])
  console.log('userInfo', userInfo)
  





  return (
    <>
      <Nav />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <h3>Welcome: {userInfo.username}</h3>
      <Container className="createdItems">
        <Col>
          {<h3>Drink: {userInfo.createdDrinks[1].drink}</h3>}
        </Col>

      </Container>
    </>
  )




}

export default UserProfile



