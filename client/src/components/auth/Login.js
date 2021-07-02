import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from '../common/Nav'

const Login = () => {
  return (
    <>
      <Nav />

      <Container className = "outer-box">
        <h2>Login here</h2>
        <Form>
          <Form.Group className="mb-3" controlId="fromBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Please enter a password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>


          <Button variant="warning" type="Submit">Login</Button>

        </Form>

      </Container>
    </>
  )
}

export default Login