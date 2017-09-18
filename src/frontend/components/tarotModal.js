import React, { Component } from 'react';
import '../styles/sass/App.css';

// IMPORT REDUX AND FILES
import { Redux, createStore } from "redux";
import store from '../redux/store/store.js';
import { displayCard, displayPersonAdvice, displaySituationAdvice, cardPicture, cardData } from '../redux/actions/index.js';
import reducer from '../redux/reducers/index.js';
import action from '../redux/actions/index.js';
import { connect } from 'react-redux';
import Navbar from './navbar.js';
import Footer from './footer.js';

class TarotModal extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.state = {
      dailyPic: "",
      cardMeaning: "",
      cardDesc: "",
    }
  }

  render() {
    return (
      <div>
        <div className="tarotModalDiv">
          <div className="tarotModalContent">
            <h1 id="tarotModalExit">X</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(TarotModal);
