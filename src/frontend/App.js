import React, { Component } from 'react';
import MainBanner from './components/mainBanner.js';
import Navbar from './components/navbar.js';
import './styles/sass/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainBanner />
      </div>
    );
  }
}

export default App;
