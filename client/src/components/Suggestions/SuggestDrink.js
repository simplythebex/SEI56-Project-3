import React, { useState } from 'react'
import axios from 'axios'
import NavHomepage from '../common/NavHomepage'
import Container from 'react-bootstrap/Container'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { useHistory } from 'react-router-dom'
import SuggestDrinkForm from '../helpers/SuggestDrinkForm'
import Footer from '../common/Footer'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const SuggestDrink = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    drink: '',
    type: '',
    country: '',
    description: '' ,
    image: '' ,
    funFact: '',
  })

  const handleChange = (event) => {
    console.log('changed')
    const suggestedDrink = { ...formData, [event.target.name]: event.target.value }
    setFormData(suggestedDrink)
  }
  console.log(formData)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        '/api/suggested-drinks',
        formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/heiss-room')
    } catch (err) {
      console.log(err)
    }
  }

  const handleImageUrl = url => {
    setFormData({ ...formData, image: url })
  }

  return (
    <>
      <Container fluid sticky="top" className="nav-container-pages">
        <NavHomepage />
      </Container>

      <Breadcrumb className="show-drink-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Suggest a Drink</Breadcrumb.Item>
      </Breadcrumb>

      <Container className = "login-register-outer-box">
        <h2>Suggest a Drink</h2>
        <p>At Heiss we love to hear your suggestions, so please let us know if there is a drink you would like to see on our menu!</p>
        <SuggestDrinkForm 
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          handleImageUrl = {handleImageUrl}
          formData = {FormData}
        />

      </Container>
      <Footer />
    </>
  )
}

export default SuggestDrink

// dkgxxaoqn
//  https://api.cloudinary.com/v1_1/dkgxxaoqn/image/upload