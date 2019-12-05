import React from 'react';
import Cat from '../assets/Cat.png';

function ContactCard(props) {
  console.log(props)
  return(
    <div className="contact-card">
      {/* <img src={require('../assets/Cat.png')} alt=""/> */}
      <img src={Cat} alt=""/>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default ContactCard;