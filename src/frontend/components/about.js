import React, { Component } from 'react';
import '../styles/sass/App.css';

class About extends Component {
  render() {
    return (
      <div className="aboutMeDiv">
        <div className="container">
          <center>
            <div className="row">

              <div className="col-md-6">
                <div className="picDiv">

                </div>
              </div>

              <div className="col-md-6">
                <div id="descriptionDiv">
                  With over 25 Years of experience in guiding individuals to live
                  more fulfilling lives, I know (personally) the importance of
                  never giving up.
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default About;
