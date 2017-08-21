import React, { Component } from 'react';
import '../styles/sass/App.css';

class BookMe extends Component {
  render() {
    return (
      <div className="bookMeDiv">

      <center><h1>2 types of appointments:</h1></center>
      <br />
      <br />

      <center>
        <div className="row">

          <div className="col-md-6">
            <div className="bookBox">
              <center><p><i className="fa fa-user" id="userIcon" aria-hidden="true"></i></p></center>
              <br />
              <h2>In person</h2>
              <hr className="bookHr" />
              <p className="bookBoxDesc">
                Contact me today for a Personal reading, where you will be in a serene and comfortable
                surrounding  to receive a most enlightening experience. You will  be able to  see the
                cards unfolding in front of you. The Tarot  tells your story and answers your questions.
                Let me  be the Medium between you  and the cards. The experience will help you to guide
                your life in the right direction and help to make important decisions.
                Since this is a one - on - one experience, there is no direct time limit. It will be ALL about you !
              </p>

              <center><button className="schedApptButton" id="leftButton">Schedule appointment</button></center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bookBox">
              <center><p><i className="fa fa-mobile" id="phoneIcon" aria-hidden="true"></i></p></center>
              <br />
              <h2>Over the phone</h2>
              <hr className="bookHr" />
              <p className="bookBoxDesc">
                Inspite of not having the oppurtunity of meeting each other, we can still get great results from a phone reading. A special Universal bond makes you  chose to get a reading from me!!!
                After our initial bonding and communication, I shuffle the cards while concentrating on the Energies created by that special and soul - connecting bond. You can get a deep and  compelete reading even if you are sitting in any diifferent part of the world or in any time- zone !
                I like to give special attention and time to my caller. We do not finish the readings till all your questions are answered!
              </p>
              <center><button className="schedApptButton">Schedule appointment</button></center>
            </div>
          </div>
        </div>
      </center>

      </div>
    );
  }
}

export default BookMe;
