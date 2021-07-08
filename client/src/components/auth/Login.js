import React from 'react'
import Container from 'react-bootstrap/Container'
import NavHomepage from '../common/NavHomepage'
import LoginBox from './LoginBox'


const Login = () => {

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>

      <LoginBox
        path = '/' 
      />
    </>
  )
}

export default Login