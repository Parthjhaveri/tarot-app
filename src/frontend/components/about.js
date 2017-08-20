import React, { Component } from 'react';
import '../styles/sass/App.css';

class About extends Component {
  render() {
    return (
      <div>
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
                    <br />
                    <br />
                    Whether you have problems personally, financially, spiritually
                    - or even if you just need some one to help guide you through
                    your struggles, I can provide guidance that can help you reach
                    your goals and quell all of your problems.
                    <br />
                    <br />
                    Please feel free to reach out!
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>

        <div className="orangeBanner">
        </div>

    </div>

    );
  }
}

export default About;
