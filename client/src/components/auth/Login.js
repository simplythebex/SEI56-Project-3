import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from '../common/Nav'
import LoginBox from './LoginBox'


const Login = () => {

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>

      <LoginBox
        path = '/' 
      />
    </>
  )
}

export default Login