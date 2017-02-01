import React from 'react'

function Buttons(props) {
  return(
    <span>
      <button>Save Changes</button>
      <button onClick={props.onClear}>Clear</button>
    </span>
  )
}

export default Buttons
