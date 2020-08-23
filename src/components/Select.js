import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import './select.css';

function Select({options}) {

  // State 
  const [selectedValue, setSelectedValue] = useState('Sélectionner une valeur')
  const [openList, setOpenList] = useState(false)
 
  // Handle form value
  const handleChange = (event) => {

    // Put Selected Value in state (Reacthook)
    setSelectedValue(event.target.value)
    // close select div
    setOpenList(false)
  }
  // Open and close Select div
  const handleOpenList = () => {
    if (openList === false) {
      setOpenList(true)
    } else if (openList === true)
    setOpenList(false)
  }
  // create an input for each item in listValues array
  const list = options.map((option, i) => <label key={i} className='label' htmlFor={option}> {option}<input id={option} key={i} type="checkbox" value={option} name={option} /></label> )

  return (
    <div>
      <div className="select-container">
        <div className={`select ${openList ? "select-open" : "select"}`} onClick={handleOpenList}>
          <div>
            {selectedValue}
          </div>
          <div className="arrowbutton">
            <FaArrowAltCircleDown />
          </div> 
        </div>
        <div className="select-form-container">
          <form 
            className={`select-form ${openList ? "select-form" : "select-form-open"}`}
            onChange={handleChange}>
            {list}
          </form>
        </div>
      </div>  
    </div>
  );
}
export default Select;