import React from 'react'
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Dropdown from 'react-bootstrap/Dropdown'

const DisplayChecked = ({ handleChecked, handleChosenOrigin, placesOfOrigin }) => {

  return (
    <>
      <Container className="sorting-row-wrapper">
        <Row className="buttons-row">
          <Col className="shop-drinks">
            <h3>Shop drinks</h3>
          </Col>
          <Col xs={6} className="sorting-buttons">
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary" value="Coffee" onClick={handleChecked}>Coffee</Button>
              <Button variant="outline-secondary" value="Tea" onClick={handleChecked}>Tea</Button>
              <Button variant="outline-secondary" value="All" onClick={handleChecked}>All</Button>
            </ButtonGroup>
          </Col>
          <Col className="dropdown">
            {/* <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic"> */}
            <label htmlFor="drinks">Origins</label>
            <select className="main-filters-dropdown" onChange={handleChosenOrigin}>
              {placesOfOrigin.map((placesOfOrigin, index) => {
                return (
                  <option key={index} value={placesOfOrigin}>{placesOfOrigin}</option>
                )
              })}
            </select>
            {/* </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
        </Row>
      </Container>


      <Container>
        <Row>

        </Row>
        <br></br>


        <br></br>

      </Container>

    </>

  )
}

export default DisplayChecked

