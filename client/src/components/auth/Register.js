import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from '../common/Nav'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '', 
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '', 
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submitted')
    try {
      await axios.post('/api/register', formData)
      history.pushState('./login')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Nav />

      <Container className = "outer-box">
        <h2>Register here</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="fromBasicUsername">
            <Form.Label>Please choose a username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="fromBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            <Form.Text className="text-muted">
            We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Please enter a password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="fromBasicPasswordConfirmation">
            <Form.Label>Please confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" name="passwordConfirmation" onChange={handleChange}/>
          </Form.Group>

          <Button variant="warning" type="Submit">Register</Button>

        </Form>

      </Container>
    </>
  )
}

export default Register