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
              <center><button className="schedApptButton">Schedule appointment</button></center>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bookBox">
              <center><p><i className="fa fa-mobile" id="phoneIcon" aria-hidden="true"></i></p></center>
              <br />
              <h2>Over the phone</h2>
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
