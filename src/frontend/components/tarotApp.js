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

    // CARDS
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

    let magicianCard = "the-magician-tarot";
    let magicianCardDesc = "The Magician tarot card appears to remind you that you have the power," +
                           " skill and focus to create a successful and meaningful life for yourself." +
                           " Often, we can feel powerless in our own lives and believe that success and " +
                           "achievement are reserved for those who are driven and goal-oriented. However," +
                           " the magician is here to tell us that we all have the ability to tap into that focused, " +
                           "creative energy, even if we are not the go-getter type."

    let highPriestessCard = "the-high-priestess-tarot";
    let highPriestessCardDesc = "The High Priestess tarot card is one of the more mystifying cards of the" +
                                " Major Arcana, full of secrets and mysteries as she beckons you to explore" +
                                " the unknown depths of your soul. We all have a rich, deep, dark inner landscape" +
                                "which we call the subconscious and unconscious and it is through the exploration " +
                                "of these levels of consciousness that we find solutions, insights and inspiration." +
                                " Our dreams are a rich source of insights into ourselves, as is meditation, hypnosis" +
                                " and guided meditative journeying. All of these things are appropriate for you to " +
                                "explore at this time. Listening to your body is also a valuable skill as our intuition " +
                                "is often felt in the form of physical feelings or symptoms. By listening to the body " +
                                "we can reconnect with that old, wise part of ourselves that can guide us toward the best" +
                                " decision or action."

    let empressCard = "the-empress1";
    let empressCardDesc = "When you look at The Empress, you can tell right away that she is one laid back lady!" +
                          " Her relaxed posture and the stars around her head suggest that she is cool and" +
                          " calm – perhaps even a little “spaced out”. The trees and wheat that surround her are " +
                          "growing without her having to strive and sweat – she takes it easy while nature unfolds" +
                          " around her. The Empress reminds you that sometimes all you need to do is nurture. " +
                          "If you have a goal or dream, don’t push too hard, just provide the right conditions for that " +
                          "dream to flourish. Positive self talk, affirmations, being kind to yourself, celebrating your " +
                          "talents and successes – all of this will create fertile soil for your dreams to take root and grow." +
                          " Sometimes, when we try too hard we end up interfering in the magical process that is unfolding. " +
                          "If we take a backseat, relax and allow things to unfold on their own, we may be surprised at how" +
                          " little effort is needed to accomplish our goals. While there is a time for effort and hard work, " +
                          "The Empress Tarot card meaning is that right now what is needed is patience and nurturing."


    let cardImage = document.getElementById('dailyCardPic');

    // GENERATE RANDOM PIC
    let randomPic = cardArray[Math.floor(Math.random() * cardArray.length)];

    // MATCH DESCRIPTION WITH THE RANDOM CARD PIC GENERATED --------------------

    // FOOL CARD
    randomPic.includes(foolCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "New Beginnings, Optimism, Trust"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, foolCardDesc)}) : console.log("false")

    // MAGICIAN CARD
    randomPic.includes(magicianCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Manifestation, Personal Power, Creativity"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, magicianCardDesc)}) : console.log("false")

    // THE HIGH PRIESTESS CARD
    randomPic.includes(highPriestessCard) === true ?
    this.setState({
      cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Inaction, Going Within, The Subconscious"),
      cardDesc: this.state.cardDesc.replace(this.state.cardDesc, highPriestessCardDesc)
    }) : console.log("false")

    // THE HIGH EMPRESS CARD
    randomPic.includes(empressCard) === true ?
    this.setState({
      cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Creativity, nurturing and abundance!"),
      cardDesc: this.state.cardDesc.replace(this.state.cardDesc, empressCardDesc)
    }) : console.log("false")

    // -------------------------------------------------------------------------

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
