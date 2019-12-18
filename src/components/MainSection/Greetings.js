import React from 'react';

function Greetings() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30,
    fontStyle: "italic",
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "rgb(40, 44, 52)"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#d90000"
  } else {
    timeOfDay = "night"
    styles.color = "rgb(46, 9, 39)"
  }

  
  return (
  <h2 style={styles}>Good {timeOfDay}!</h2>
  )
}

export default Greetings;