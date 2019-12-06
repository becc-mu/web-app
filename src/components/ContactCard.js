import React from 'react';
// import './assets/Cat.png';

function ContactCard(props) {
  console.log(props)
  return(
    <div className="contact-card">
      {/* <img src={require('../assets/Cat.png')} alt=""/> */}
      {/* <img src={Cat} alt=""/> */}
      {/* <img src={props.contact.imgSrc} alt=""/> */}
      <img src={props.contact.imgUrl} alt={props.contact.name}/>
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard;