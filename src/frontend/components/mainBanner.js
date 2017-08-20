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
        </div>

      </div>
    );
  }
}

export default MainBanner;
