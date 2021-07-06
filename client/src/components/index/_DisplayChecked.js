import React from 'react'
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const DisplayChecked = ({ handleChecked, typesOfDrinks }) => {
  return (
    <>
      <Container>
        <Row>
          <Col className="flter-col-top">
            <Button variant="link">Filter</Button>
          </Col>
          <Col>
            <Button variant="link">Clear All</Button>
          </Col>
        </Row>
        <br></br>
        <label htmlFor="drinks">Still trying to figure out checkboxes, but dropdown works</label>
        <select className="main-filters-dropdown" onChange={handleChecked}>
          {typesOfDrinks.map((typeOfDrink, index) => {
            return (
              <option key={index} value={typeOfDrink}>{typeOfDrink}</option>
            )
          })}
        </select>
        <br></br>
      </Container>
    </>
  )
}

export default DisplayChecked

