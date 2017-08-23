import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Redux, createStore } from "redux";

import MainBanner from './components/mainBanner.js';
import Navbar from './components/navbar.js';
import About from './components/about.js';
import BookMe from './components/waysToBook.js';
import Footer from './components/footer.js';
import TarotApp from './components/tarotApp.js';
import WhatIsTarot from './components/whatIsTarot.js';

import './styles/sass/App.css';

import reducer from './redux/reducers/index.js';
import './redux/actions/index.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainBanner />
        <WhatIsTarot />
        <BookMe />
        <Footer />
      </div>
    );
  }
}

export default App;
