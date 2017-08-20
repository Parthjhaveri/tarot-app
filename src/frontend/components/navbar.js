import React, { Component } from 'react';
import '../styles/sass/App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navDiv">
        <p id="headingLogo">TARA TAROT & HOME</p>
        <button className="contactMe">CONTACT</button>

        <ul className="socialUl">
          <li className="socialUlLi"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
          <li className="socialUlLi"><i className="fa fa-instagram" aria-hidden="true"></i></li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
