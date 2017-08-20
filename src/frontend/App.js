import React, { Component } from 'react';
import MainBanner from './components/mainBanner.js';
import Navbar from './components/navbar.js';
import About from './components/about.js';
import './styles/sass/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainBanner />
        <About />
      </div>
    );
  }
}

export default App;
