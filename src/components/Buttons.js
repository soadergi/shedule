import React from 'react'

function Buttons(props) {
  let isSelected = props.toCheckIfSelected.some(day => day.some(i => !!i));
  return(
    <span>
      <button>Save Changes</button>
      <button
        onClick={props.onClear}
        className={isSelected?'active':''}
      >Clear</button>
    </span>
  )
}

export default Buttons
