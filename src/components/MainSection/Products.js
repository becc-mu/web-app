import React from 'react'

function Products(props) {
  const styles = {
    justifyContent: 'left',
    paddingLeft: 'unset',
    textAlign: 'left',
    marginTop: 'auto',
    marginRight: 50,
    marginBottom: 2,
    marginLeft: 200,
    borderBottom: 'solid',
    listStyle: 'none',
  }
  return (
    <div>
      <ul style={styles}>
        <li style={{ styles }}>
          <h1>{props.product.name}</h1>
        </li>
        <li style={{ styles }}>
          {props.product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </li>
        <li style={{ styles }}>{props.product.description}</li>
      </ul>
    </div>
  )
}

export default Products
