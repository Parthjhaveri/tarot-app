import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                      My journey with Tarot started 24 years ago when my son was very sick and in bed
                      for 3 years. I used to ask myself that why did this happen to a small 4 year old.
                      When would he get better and run around like other children? At that time  my friend
                      gifted me with a book on Tarot cards and that started my wonderful and soul satisfying
                      journey with the Tarot. It gave me answers and helped me to deal with all the difficulties
                      that my son and my family were facing. After that began my bond with the cards. It was
                      as if they came looking for me!! Ever since I have been doing thousands of readings for
                      freinds, family and ofcourse for seekers.
                      <br />
                      <br />
                      Let me help you too. Call me or contact me for a reading in a serene and peaceful
                      surrounding. I can do accurate phone redaings too .Call today. You will  be making
                      the right choice! Let me be that friend you want to go to.

                    <blockquote>
                    <h3 id="taraBlockquote">- Best, Tara.</h3>
                    </blockquote>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>

        <div className="orangeBanner">
          <center><h2 id="freeReadingHeading">Get your free online reading</h2><Link to={'tarot-app'}><button id="freereading">FREE READING</button></Link></center>
        </div>

    </div>

    );
  }
}

export default About;
