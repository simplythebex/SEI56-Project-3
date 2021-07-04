import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
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

{/* 
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
      Checkbox 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
      Checkbox 2
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
      Checkbox 3 (pre-checked)
        </ToggleButton>
      </ToggleButtonGroup> */}

      
    </>

  )
}

export default DisplayChecked

