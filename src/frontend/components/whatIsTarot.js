import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/App.css';

class WhatIsTarot extends Component {
  render() {
    return (
      <div className="whatIsTarotDiv">
        <h1>What is Tarot? </h1>
        <br />
        <p>
          Tarot is a device for meditation, reflection, contemplation, problem analysis, brain-storming,
          decision clarification, stimulation of intuition, self understanding and divination. The cards
          allow us to tap into a dimension of the universe that is otherwise inaccessible to us. They offer
          an alternative view and a new perspective into the problems in our lives. This leads to SOLUTIONS!
        </p>

      </div>
    );
  }
}

export default WhatIsTarot;
