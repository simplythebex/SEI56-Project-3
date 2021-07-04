import React from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const DisplayChecked = ({ handleChecked, typesOfDrinks }) => {
  return (
    <>
      <select onChange={handleChecked}>
        {typesOfDrinks.map((typeOfDrink, index) => {
          return (
            <option key={index} value={typeOfDrink}>{typeOfDrink}</option>
          )
        })}
      </select>

      {/* <Button className="btn-filters" variant="link">
        <img alt src="../styles/assets/filter-filled-tool-symbol.png" width="18" height="18"></img>
Filters
      </Button>
      <Button className="btn-filters-clear" variant="link">Clear All</Button>
      <h3 className="filter-name">Type</h3>
      <Form.Group controlId="formBasicCheckbox" value={drinks.type} onClick={handleChecked}>
        <Form.Check type="checkbox" label="Teas" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" value={drinks.type} onClick={handleChecked}>
        <Form.Check type="checkbox" label="Coffees" />
      </Form.Group>

      <h3 className="filter-name">Origin</h3>
      <Form.Group controlId="formBasicCheckbox" onClick={handleChecked}>
        <Form.Check type="checkbox" label="Africa" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" onClick={handleChecked}>
        <Form.Check type="checkbox" label="Americas" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" onClick={handleChecked}>
        <Form.Check type="checkbox" label="Asia" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" onClick={handleChecked}>
        <Form.Check type="checkbox" label="Europe" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" onClick={handleChecked}>
        <Form.Check type="checkbox" label="Oceania" />
      </Form.Group> */}
    </>

  )
}

export default DisplayChecked

