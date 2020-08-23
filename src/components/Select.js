import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

function Select() {

  // Put your values in this array
  const listValues = ['item1', 'item2', 'item3', 'item4']

  const [selectedValue, setSelectedValue] = useState('Sélectionner une valeur');
  const [openList, setOpenList] = useState(false)

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    setOpenList(false)
  }
  const handleOpenList = () => {
    if (openList === false) {
      setOpenList(true)
    } else if (openList === true)
    setOpenList(false)
  }
  console.log(openList);



  const list = listValues.map((option, i) => <label className='label' htmlFor={option}> {option}<input id={option} key={i} type="checkbox" value={option} name={option} /></label> )

  return (
    <div>
      <div className="select-container">
        <div className={`select ${openList ? "select-open" : "select"}`} onClick= {handleOpenList}>
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