import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
//import { getTokenFromLocalStorage } from './helpers/auth.js'

const UserProfile = () => {
  const [userInfo,  setUserInfo] = useState([])
  // const { id } = useParams()
  // const history = useHistory()

  
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
  
  // const userIsOwner = (userId) => {
  //   const payload = getPayLoad()
  //   if (!payload) return false
  //   return userId === payload.sub
  // }


  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/api/suggested-drinks/${id}`, {
  //       headers: { 
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     history.push('/profile')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }



  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>
      <Container className="main-container">
        
        <Breadcrumb className="breadcrump">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <h3>Your suggestions</h3>
        <Container className="createdItems">
          <Col>
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
                          {/* <Button className="outline-light" variant="warning">Edit</Button>
                          <Button onClick={handleDelete} variant="warning">Delete</Button> */}
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



