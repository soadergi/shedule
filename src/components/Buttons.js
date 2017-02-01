import React from 'react'

function Buttons(props) {
  return(
    <div>
      <button>Save Changes</button>
      <button onClick={props.onClear}>Clear</button>
    </div>
  )
}

export default Buttons
