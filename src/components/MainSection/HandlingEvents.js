import React from 'react'

function HandlingEvents() {
  function handleClick() {
    console.log("I was clicked")
  }

  return (
    <div>
      <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" alt=""/>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default HandlingEvents