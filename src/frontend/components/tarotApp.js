import React, { Component } from 'react';
import '../data/frontEndData.js';
import '../styles/sass/App.css';

class TarotApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dailyPic: ""
    }

  }

  componentDidMount() {

    // TAROT CARDS ARRAY
    let cardArray = [
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/07/the-fool-tarot.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/07/the-magician-tarot.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/07/the-high-priestess-tarot.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/09/the-empress1.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/07/the-emperor-tarot.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/07/the-hierophant-tarot.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/10/the-lovers-tarot-card.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/09/the-chariot-tarot-card.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/10/strength-tarot-card-meaning.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/10/the-hermit.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/10/wheel-of-fortune-tarot-card.jpg",
      "http://www.daily-tarot-girl.com/wp-content/uploads/2012/11/justice-tarot-card.jpg",
    ]

    let cardImage = document.getElementById('dailyCardPic');

    let randomPic = cardArray[Math.floor(Math.random() * cardArray.length)];

    this.setState({dailyPic: this.state.dailyPic.replace(this.state.dailyPic, randomPic)})

  }

  render() {
    return (
      <div>

        <div className="tarotAppDiv">
          <center>
            <div className="row">

              <div className="col-md-4" id="dailyCardDiv">
                <center>
                  <img src={this.state.dailyPic} id="dailyCardPic" />
                </center>
              </div>


              <div className="col-md-8">
              </div>

            </div>
          </center>
        </div>

      </div>
    );
  }
}

export default TarotApp;
