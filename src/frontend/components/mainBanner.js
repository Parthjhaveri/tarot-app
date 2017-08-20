import React, { Component } from 'react';
import '../styles/sass/App.css';

class MainBanner extends Component {
  render() {
    return (
      <div className="mainBannerDiv">

        <div className="mountainPicDiv">

          <p>Life is full of mountains- let me help you climb them...</p>
          <p id="subheading">Tarot readings, Spiritual healing and professional guidance</p>

            <button className="mainBannerButton">CONTACT</button>
            <button className="mainBannerButton">FACEBOOK</button>


        </div>

        <div className="purpleDiv">
        <p id="icanhelpyouregain">I can help you regain...</p>
          <center>
            <p className="tagline a">Wisdom</p>
            <p className="tagline b">Courage</p>
            <p className="tagline c">Success</p>
            <p className="tagline d">Prosperity</p>
            <p className="tagline e">Peace of mind</p>
            <p className="tagline f">Mindfullness</p>
          </center>
          <center><i className="fa fa-angle-down downArr" aria-hidden="true"></i></center>
        </div>

      </div>
    );
  }
}

export default MainBanner;
