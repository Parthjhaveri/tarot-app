import React, { Component } from 'react';
import '../styles/sass/App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navDiv">
        <p id="headingLogo"><img id="logo" src="http://www.clker.com/cliparts/j/L/K/k/u/r/a-sun-cartoon-with-a-long-ray-md.png" /></p>
        <button className="contactMe">CONTACT ME</button>
        <i className="fa fa-bars ham" aria-hidden="true"></i>

        <ul className="socialUl">
          <li className="socialUlLi"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
          <li className="socialUlLi"><i className="fa fa-instagram" aria-hidden="true"></i></li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
