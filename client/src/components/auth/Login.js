import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from '../common/Nav'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory()

  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(newFormData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('token', token)
  }

  const handleFocus = () => {
    setError(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      console.log('data', data)
      console.log('data.token', data.token)
      setTokenToLocalStorage(data.token)
      history.push('/')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }


  return (
    <>
      <Nav />

      <Container className = "outer-box">
        <h2>Login here</h2>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="fromBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} onFocus={handleFocus}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Please enter a password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} onFocus={handleFocus}/>
          </Form.Group>
          {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}


          <Button variant="warning" type="Submit">Login</Button>

        </Form>

      </Container>
    </>
  )
}

export default Login