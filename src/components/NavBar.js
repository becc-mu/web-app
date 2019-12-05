import React from 'react';
import '../App.css';

function NavBar() {
  return(
    <div className="flex-container">
      <div className="flex-item"><h1>Portfolio</h1></div>
      <div className="raw-item"><h3>Home</h3></div>
      <div className="raw-item"><h3>About</h3></div>
      <div className="raw-item"><h3>Contact</h3></div>
    </div>
  )
}

export default NavBar;