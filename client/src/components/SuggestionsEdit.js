import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Nav from './common/Nav.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/esm/Container'
//import Col from 'react-bootstrap/esm/Col'
import SuggestDrinkForm from './helpers/SuggestDrinkForm'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth.js'

const SuggestionsEdit = () => {
  const { id } = useParams()
  const history = useHistory()
  const [formData, setFormData] = useState({
    drink: '',
    type: '',
    country: '',
    description: '' ,
    image: '' ,
    funFact: '' ,
    origin: '',
  })

  useEffect(() => {
    const getData = async () =>  {
      const { data } = await axios.get(`/api/suggested-drinks/${id}`)
      setFormData(data)
    }
    getData()
  },[id])
  
  console.log('formData', formData)

  const handleChange = (event) => {
    const updatedFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(updatedFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/suggested-drinks/${id}`, formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      history.push(`/profile/${id}`)

    } catch (err) {
      console.log(err)
    }
  }

  // const handleImageUrl = url => {
  //   setFormData({ ...formData, image: url })
  // }

  const handleImageUrl = url => {
    setFormData({ ...formData, image: url })
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <Nav />
      </Container>
      <Breadcrumb className="breadcrump">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
        <Breadcrumb.Item active>Edit</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <Container>
        <SuggestDrinkForm 
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          handleImageUrl = {handleImageUrl}
          formData = {FormData}
        />
      </Container>
    </>
  )


}
export default SuggestionsEdit


