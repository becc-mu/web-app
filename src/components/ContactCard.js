import React from 'react';

function ContactCard() {
  return(
    <div className="contacts">
      <div className="contact-card">
        <img src="../assets/cat_opt.png/400/267" alt="cat"></img>
        <h3>Mr Whiskers</h3>
        <p>Phone: (44) 456-1234</p>
        <p>Email: m.whiskers@yahoo.com</p>
      </div>

      <div className="contact-card">
        <img src="../assets/cat_opt.png/400/267" alt="cat"></img>
        <h3>Iamsky</h3>
        <p>Phone: (44) 456-1234</p>
        <p>Email: iamsky@example.com</p>
      </div>

      <div className="contact-card">
        <img src="../assets/cat_opt.png/400/267" alt="cat"></img>
        <h3>Fluffykins</h3>
        <p>Phone: (44) 156-1534</p>
        <p>Email: a.Fluffykins@gmail.com</p>
      </div>

      <div className="contact-card">
        <img src="../assets/cat_opt.png/400/267" alt="cat"></img>
        <h3>Moussky</h3>
        <p>Phone: (44) 456-1234</p>
        <p>Email: moussky@hotmail.com</p>
      </div>
    </div>
  )
}

export default ContactCard;