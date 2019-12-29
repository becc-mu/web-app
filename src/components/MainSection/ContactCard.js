import React from 'react';


function ContactCard(props) {
  console.log(props)

  return(
    <div className="contact-card">
      {/* <img src={require('../assets/Cat.png')} alt=""/> */}
      {/* <img src={Cat} alt=""/> */}
      {/* <img src={props.contact.imgSrc} alt=""/> */}
     
      <div className="App" alt={props.contact.name}><img src={props.contact.image} alt={props.contact.name}/></div>
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard;