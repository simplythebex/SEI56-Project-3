import React, { useState } from 'react'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
//import Col from 'react-bootstrap/esm/Col'


const SuggestionsEdit = () => {
  const [formData, setFormData] = useState({
    drink: '',
    type: '',
    country: '',
    description: '' ,
    image: '' ,
    funFact: '' ,
    origin: '',
  })


  
  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>
      <Breadcrumb className="breadcrump">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <h1>suggestions edit</h1>
    </>
  )


}
export default SuggestionsEdit


