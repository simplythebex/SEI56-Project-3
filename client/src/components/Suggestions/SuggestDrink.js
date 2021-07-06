import React, { useState } from 'react'
import axios from 'axios'
import Nav from '../common/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { getTokenFromLocalStorage } from '../helpers/auth'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../helpers/ImageUploadField'

const SuggestDrink = () => {

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
        <Nav />
      </Container>

      <Container className = "outer-box">
        <h2>Suggest a Drink</h2>
        <p>At Heiss we love to hear your suggestions, so please let us know if there is a drink you would like to see on our menu!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicDrink">
            <Form.Control 
              type="text" 
              placeholder="Drink name" 
              name="drink" 
              onChange={handleChange}
              value={formData.drink}
            />
          </Form.Group>

          <Form.Group>
            {/* <Form.Label>Select drink type</Form.Label> */}
            <Form.Control 
              as="select" 
              value={formData.type} 
              name="type" 
              onChange={handleChange}>
              <option>- Please select a type of drink -</option>
              <option>Tea</option>
              <option>Coffee</option>
            </Form.Control>
          </Form.Group>
          <br />

          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Control 
              type="text" 
              placeholder="Which country is your drink from?" 
              name="country" 
              onChange={handleChange}
              value={formData.country}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="fromBasicDescription">
            <Form.Control 
              as="textarea"
              rows={3}
              placeholder="Drink description" 
              name="description" 
              onChange={handleChange}
              value={formData.description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFunFact">
            <Form.Control 
              as="textarea"
              rows={3}
              placeholder="Any fun facts you'd like to share!" 
              name="funFact" 
              onChange={handleChange}
              value={formData.funFact}
            /> 
          </Form.Group>

          <Form.Group>
            <Form.Control 
              as="select" 
              value={formData.origin} 
              name="origin" 
              onChange={handleChange}>
              <option>- Where is your drink from? -</option>
              <option>Africa</option>
              <option>Antartica</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>North America</option>
              <option>Oceania</option>
              <option>South America</option>
            </Form.Control>
          </Form.Group>
          <br />

          <ImageUploadField 
            value={formData.image}
            name="image"
            handleImageUrl={handleImageUrl}
          />

          <Button variant="light" type="Submit" block>Submit</Button>

        </Form>

      </Container>
    </>
  )
}

export default SuggestDrink

// dkgxxaoqn
//  https://api.cloudinary.com/v1_1/dkgxxaoqn/image/upload