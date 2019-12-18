import React from 'react'

function Products(props) {
  const styles = {
    justifyContent: "left",
    paddingLeft: "unset",
    textAlign: "left",
    marginTop: "auto",
    marginRight: 50,
    maginBottom: 2,
    marginLeft: 200,
 
    borderBottom: "solid"
  }
  return(
    <div>
      <ul style={styles} >
        <li style={{display: props.name ?  "block" : "none"}} >{props.name}</li>
        <li style={{display: props.price ?  "block" : "none"}} >{props.price}</li>
        <li style={{display: props.description ?  "block" : "none"}} >{props.description}</li>
      </ul>
    </div>
  )
}

export default Products 