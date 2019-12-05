import React from 'react';

function Greetings() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  const styles = {
    color: "rgb(40, 44, 52)",
    fontStyle: "italic",
  }
  return (
  <h2 style={styles}>Good {timeOfDay}!</h2>
  )
}

export default Greetings;