import React, { Component } from 'react';
import {randomDisplay} from '../data/frontEndData.js';
import '../styles/sass/App.css';

class TarotApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dailyPic: "",
      cardMeaning: "",
      cardDesc: "",
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

    // CARD NAMES
    let foolCard = "the-fool-tarot";
    let foolCardDesc = 'The Fool is a journeyer of life- who sets out on his grand adventure without a map-' +
                       'trusting that life will lead him in right direction and everything will turn out' +
                       'splendidly! He represents the adventurous- joyful and carefree spirit within all of us.' +
                       ' Remember that person who used to work in your office who suddenly up and quit one day ' +
                       'to go travel or start is own business teaching surfing? You resent him. How dare he!?' +
                       ' Who does he think he is? The Fool can be a bit naive. For example, he is the dude who' +
                       'gets all fired up about some bizarre business venture and puts all of his life savings and' +
                       'energy into it. He may turn out to be a millionaire or a broke hobo, but he will always trust' +
                       'his instincts, follow his heart and live each day joyfully.';


    let cardImage = document.getElementById('dailyCardPic');

    // GENERATE RANDOM PIC
    let randomPic = cardArray[Math.floor(Math.random() * cardArray.length)];

    // MATCH DESCRIPTION WITH THE RANDOM CARD PIC GENERATED
    randomPic.includes(foolCard) === true ?
    this.setState({
      cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "New Beginnings, Optimism, Trust"),
      cardDesc: this.state.cardDesc.replace(this.state.cardDesc, foolCardDesc)
    }) : console.log("false")

    // SET STATE OF RANDOM PIC TO DISPLAY
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
                  <h1>Card of the day:</h1>
                  <br />
                  <img src={this.state.dailyPic} id="dailyCardPic" />
                  <h3>{this.state.cardMeaning}</h3>
                  <br />
                  <p id="cardDescription">{this.state.cardDesc}</p>
                  <hr id="dailyCardHr"/>
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
