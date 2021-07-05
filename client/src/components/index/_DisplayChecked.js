import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
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
        <label for="drinks">Still trying to figure out checkboxes, but dropdown works</label>
        <select className="main-filters-dropdown" onChange={handleChecked}>
          {typesOfDrinks.map((typeOfDrink, index) => {
            return (
              <option key={index} value={typeOfDrink}>{typeOfDrink}</option>
            )
          })}
        </select>

        <br></br>


        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="checkbox-list">
          <ToggleButton variant="outline-secondary" id="tbg-check-1" value={1}>
      Checkbox 1 (pre-checked)
          </ToggleButton>
          <ToggleButton variant="outline-secondary" id="tbg-check-2" value={2}>
      Checkbox 2
          </ToggleButton>
          <ToggleButton variant="outline-secondary" id="tbg-check-3" value={3}>
      Checkbox 3 (pre-checked)
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>

    </>

  )
}

export default DisplayChecked

