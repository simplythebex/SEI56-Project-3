import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const DisplayChecked = ({ handleChecked }) => {

  return (
    <>
      <Container className="sorting-row-wrapper">
        <Row className="buttons-row">
          <Col className="shop-drinks">
            <h3>Shop drinks</h3>
          </Col>
          <Col xs={6} className="sorting-buttons">
            <ButtonGroup aria-label="Basic example">
              <Button className="filter-btn-coffee" variant="outline-secondary" value="Coffee" onClick={handleChecked}>Coffee</Button>
              <Button className="filter-btn-tea" variant="outline-secondary" value="Tea" onClick={handleChecked}>Tea</Button>
              <Button className="filter-btn-all" variant="outline-secondary" value="All" onClick={handleChecked}>All</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
  
}

export default DisplayChecked



// * ======================================== * //
//* Dead code cemetary: Keeping this here in case we want to bring back filtering by origin. * //

// import Dropdown from 'react-bootstrap/Dropdown'

{/* <Col className="dropdown"> */}
{/* <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic"> */}
{/* <label htmlFor="drinks">Origins</label>
            <select className="main-filters-dropdown" onChange={handleChosenOrigin}>
              {placesOfOrigin.map((placesOfOrigin, index) => {
                return (
                  <option key={index} value={placesOfOrigin}>{placesOfOrigin}</option>
                )
              })}
            </select> */}
{/* </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
{/* </Col> */}