import React, { Component } from 'react';
import '../styles/sass/App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navDiv">
        <p id="headingLogo">TARA TAROT & HOME</p>
        <button className="contactMe">CONTACT</button>
      </div>
    );
  }
}

export default Navbar;
