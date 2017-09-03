import React, { Component } from 'react';
import '../styles/sass/App.css';

// IMPORT REDUX AND FILES
import { Redux, createStore } from "redux";
import store from '../redux/store/store.js';
import { displayCard, displayPersonAdvice, displaySituationAdvice, testNum } from '../redux/actions/index.js';
import reducer from '../redux/reducers/index.js';
import action from '../redux/actions/index.js';
import { connect } from 'react-redux';
import Navbar from './navbar.js';
import Footer from './footer.js';

class TarotApp extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.state = {
      dailyPic: "",
      cardMeaning: "",
      cardDesc: "",
    }

     this.handleNumTest = this.handleNumTest.bind(this);

  }

  // FUNCTIONS DISPATCH ACTIONS TO THE STORE
  handleNumTest = () => {
    this.props.dispatch(testNum())
    // console.log(this.store);
  }

  handleTarotClick = () => {
    this.props.dispatch(displayCard())
  }

  handleDisplayPersonAdvice = () => {
    this.props.dispatch(displayPersonAdvice())
  }

  handleDisplaySituationAdvice = () => {
    this.props.dispatch(displaySituationAdvice())
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
    let foolCardDesc =           'The Fool is a journeyer of life- who sets out on his grand adventure without a map-' +
                                 'trusting that life will lead him in right direction and everything will turn out' +
                                 'splendidly! He represents the adventurous- joyful and carefree spirit within all of us.' +
                                 ' Remember that person who used to work in your office who suddenly up and quit one day ' +
                                 'to go travel or start is own business teaching surfing? You resent him. How dare he!?' +
                                 ' Who does he think he is? The Fool can be a bit naive. For example, he is the dude who' +
                                 'gets all fired up about some bizarre business venture and puts all of his life savings and' +
                                 'energy into it. He may turn out to be a millionaire or a broke hobo, but he will always trust' +
                                 'his instincts, follow his heart and live each day joyfully.';

    let magicianCard = "the-magician-tarot";
    let magicianCardDesc =       "The Magician tarot card appears to remind you that you have the power," +
                                 " skill and focus to create a successful and meaningful life for yourself." +
                                 " Often, we can feel powerless in our own lives and believe that success and " +
                                 "achievement are reserved for those who are driven and goal-oriented. However," +
                                 " the magician is here to tell us that we all have the ability to tap into that focused, " +
                                 "creative energy, even if we are not the go-getter type."

    let highPriestessCard = "the-high-priestess-tarot";
    let highPriestessCardDesc =  "The High Priestess tarot card is one of the more mystifying cards of the" +
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
    let empressCardDesc =        "When you look at The Empress, you can tell right away that she is one laid back lady!" +
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

    let emperorCard = "the-emperor-tarot";
    let emperorCardDesc =        "The Emperor is the fifth Major Arcana card in the Tarot and he is confident, " +
                                 "courageous, grounded and knows exactly who he is. While he enjoys the structure " +
                                 "of a well laid plan and the stability of a strong will, the Emperor isn’t as boring " +
                                 "and rigid as one might initially assume. The Emperor is a rebel at heart, one who may " +
                                 "go against the grain of society and make his own rules to follow, rather than someonelse’s." +
                                 " The Emperor is here to awaken your inner rebel and remind you that ultimately you do not " +
                                 "have to follow anyone’s rules but your own! He has strong boundaries and a clear, rational" +
                                 " mind. He knows what he wants in life and knows he can achieve it with clear intention and determination." +
                                 " At times he may be stubborn and have difficulty seeing the big picture, or others viewpoints, " +
                                 "feeling that his way is the right way. He sometimes forgets that true power does not come from " +
                                 "forcing others to submit to his way of thinking. While The Emperor is the original maverick, a " +
                                 "true pioneer and trailblazer, his major challenge is remaining powerful and true to himself while allowing others to be as they are."

    let hierophantCard = "the-hierophant-tarot";
    let hierophantCardDesc =     "The Hierophant represents the institutions and belief systems in our lives – " +
                                 "school, church, corporate culture, patriarchy, consumerism, government – and " +
                                 "the influence they have on us. The Hierophant tarot card can also represent society " +
                                 "in general, with its expectations, rules and social script. The most common " +
                                 "social script is that in order to lead a successful life and be happy one must find a " +
                                 "romantic partner, have a stable career and become a parent. And make enough money to buy " +
                                 "a house and fill it with useless crap. When one’s hearts desires stray from this script, " +
                                 "they are often met with disbelief and disapproval and risk isolation and rejection " +
                                 "from the group. There are many benefits to conforming and being part of a larger group," +
                                 " even if we have to sacrifice our individuality and silence the screams of our soul. " +
                                 "Going with the pack is a strong temptation for most of us and the real challenge of The " +
                                 "Hierophant is to find a way to express ourselves, live our truth and still remain a valuable " +
                                 "member of our social group."

    let theLovers = "the-lovers-tarot-card";
    let theLoversDesc =          "The Lovers is all about the bliss of coming together and connecting with another " +
                                 "person. A whole different realm is experienced when this happens – feeling at one " +
                                 "with another, despite any differences. The world may even momentarily cease to exist " +
                                 "for these lovers, so enamored are they. The Lovers Tarot card meaning doesn’t always " +
                                 "refer to a relationship with a person, but can represent having a passionate and all-consuming " +
                                 "relationship with a hobby, interest, career or way of thinking. Whatever it is, it takes you out " +
                                 "of yourself. Choice and dilemma are another aspect of The Lovers Tarot card meaning. " +
                                 "In other versions of The Lovers, a young man is shown trying to choose between a prostitute " +
                                 "and a virgin, representing that age old dilemma of having to choose between stability/excitement " +
                                 "or right/wrong.While The Lovers Tarot card meaning is generally positive, it does represent being " +
                                 "in a state of unconsciousness and in this way it is very similar to The Devil Tarot card. In fact, " +
                                 "it can be seen as the positive aspects of The Devil Tarot card. In the Rider-Waite-Smith deck, the " +
                                 "same “lovers” are pictured again on The Devil card, only with chains on their necks. The Devil " +
                                 "represents suffering caused by unconsciousness, while The Lovers symbolize blissful unconsciousness."

    let chariotCard = "the-chariot-tarot-card";
    let chariotCardDesc =        "The Chariot is a card of moving onward and upward as you conquer that which stands in your way " +
                                 "on your journey to succeed. Ironically, the figure in this card doesn’t really look like he is " +
                                 "going anywhere! His chariot appears to be made of concrete and the two sphinxes seem as if theyre " +
                                 "just lounging around, poised to go off in different directions. If the two sphinxes aren’t in " +
                                 "agreement on the direction, the chariot will go nowhere. The black and white sphinxes represent " +
                                 "the need to integrate both light and dark sides of the self in order to move forward spiritually. " +
                                 "Similarly, we often battle internally between what we want to do and what we think we should do. The " +
                                 "Chariot Tarot card meaning suggest that once we are whole, integrated and aligned with our purpose, " +
                                 "things begin to happen! Shift occurs, movement takes place and we find ourselves hurdling down our path at mach speed!"

    let strengthCard = "strength-tarot-card-meaning";
    let strengthCardDesc =       "The Strength Tarot card challenges our typical notions of power and “strength” as it depicts a " +
                                 "fair maiden gently taming a wild beast. Instead of working against the current, she works with it, " +
                                 "showing that strength and wisdom are intimately intertwined. Wisdom, right use of power and fearlessness " +
                                 "are all themes of Strength. The lion in this card represents the beast within us, our dark and wild side. " +
                                 "If we fear, reject and try to control this part of ourselves with brute force and violent suppression, " +
                                 "it can become unruly and threaten to destroy us. When we have compassion and understanding for ourselves, " +
                                 "we are able to become integrated and whole,  strong and powerful. This Strength Tarot card meaning indicates " +
                                 "a wise kind of power – one that does not seek power over others, but the power to explore and unconditionally love one’s whole self."

    let hermitCard = "the-hermit";
    let hermitCardDesc =         "The Hermit is a Tarot card of introspection, wisdom, awareness, retreat and even spiritual enlightenment.The " +
                                 "light in The Hermit’s lantern represents conscious awareness guiding the way. In many ways, The Hermit is like " +
                                 "the more mature, wiser version of The Fool. He is still an adventurer, still a seeker, only he is exploring the " +
                                 "inner worlds of feeling, thought, ego and spirit. Retreat from the busy-ness of daily life is at the heart of The " +
                                 "Hermit Tarot card meaning. Solitude can help us gain the self awareness and understanding we need in order to engage " +
                                 "peacefully with the world around us. But there is also a rebellious side to The Hermit! The Hermit questions things, " +
                                 "goes within and acts from his own inner truth. In doing so, he lights the way for others to do the same – he is a " +
                                 "spiritual trail blazer of the highest order!"

    let wheelOfFortuneCard = "wheel-of-fortune-tarot-card";
    let wheelOfFortuneCardDesc = "The Wheel of Fortune reminds you that life is constantly in flux. The world turns around and around and similarly, " +
                                 "we too go through phases and cycles so that there are times of plenty and joy and times of scarcity and sadness. " +
                                 "The Wheel of Fortune typically represents circumstances in the physical, outer world (as opposed to the inner, " +
                                 "spiritual world). The wisdom of this Tarot card is not to base your happiness solely on outer circumstances. The " +
                                 "Wheel of Fortune Tarot card challenges you to go deeper. The more centered you are on this wheel, the less effected " +
                                 "you will be by life changes. The Wheel of Fortune often foretells a stroke of luck, appearing when things are on the " +
                                 "upswing. Yet it encourages you to get centered within yourself and detach from the worldly drama and desire for material " +
                                 "objects and social status, so that you do not feel pulled in all directions as you move through life. This is when true wisdom and joy arise."

    let justiceCard = "justice-tarot-card";
    let justiceCardDesc =        "Lady Justice is the symbol for divine judgement and the importance of understanding both sides of an issue before making a decision. " +
                                 "The Justice Tarot card meaning reminds us that we are always responsible for our actions, words and thoughts, as it is these very " +
                                 "things that will shape our experience of life. She encourages us to think carefully about what we project out into our world as the " +
                                 "law of cause and effect will always prevail. The Justice Tarot Card rules the areas of ethics, legal systems, karma, right action, accountability and impartial judgement."

    let cardImage = document.getElementById('dailyCardPic');

    // GENERATE RANDOM PIC
    let randomPic = cardArray[Math.floor(Math.random() * cardArray.length)];

    // MATCH DESCRIPTION WITH THE RANDOM CARD PIC GENERATED --------------------

    // FOOL CARD
    randomPic.includes(foolCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "New Beginnings, Optimism, Trust"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, foolCardDesc)}) : console.log("false")

    // MAGICIAN CARD
    randomPic.includes(magicianCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Manifestation, Personal Power, Creativity"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, magicianCardDesc)}) : console.log("false")

    // THE HIGH PRIESTESS CARD
    randomPic.includes(highPriestessCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Inaction, Going Within, The Subconscious"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, highPriestessCardDesc)}) : console.log("false")

    // THE HIGH EMPRESS CARD
    randomPic.includes(empressCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Creativity, nurturing and abundance!"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, empressCardDesc)}) : console.log("false")

    // THE HIGH EMPEROR CARD
    randomPic.includes(emperorCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Structure, Stability, Rules and Power"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, emperorCardDesc)}) : console.log("false")

    // THE HIEROPHANT CARD
    randomPic.includes(hierophantCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Institutions, tradition, society and its rules"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, hierophantCardDesc)}) : console.log("false")

    // THE LOVERS CARD
    randomPic.includes(theLovers) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Being drawn to someone or something, intimacy, sexual union, balance, choice or dilemma"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, theLoversDesc)}) : console.log("false")

    // THE CHARIOT CARD
    randomPic.includes(chariotCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Forward movement, success, overcoming obstacles, travel"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, chariotCardDesc)}) : console.log("false")

    // THE STRENGTH CARD
    randomPic.includes(strengthCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Patience, right use of power, conquering fear"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, strengthCardDesc)}) : console.log("false")

    // THE HERMIT CARD
    randomPic.includes(hermitCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Meditation, Consciousness and Solitude"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, hermitCardDesc)}) : console.log("false")

    // THE WHEEL OF FORTUNE CARD
    randomPic.includes(wheelOfFortuneCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Cycles, change, ups and downs of life, good luck"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, wheelOfFortuneCardDesc)}) : console.log("false")

    // THE JUSTICE CARD
    randomPic.includes(justiceCard) === true ? this.setState({cardMeaning: this.state.cardMeaning.replace(this.state.cardMeaning, "Fairness, equality and balance"), cardDesc: this.state.cardDesc.replace(this.state.cardDesc, justiceCardDesc)}) : console.log("false")

    // -------------------------------------------------------------------------

    // SET STATE OF RANDOM PIC TO DISPLAY
    this.setState({dailyPic: this.state.dailyPic.replace(this.state.dailyPic, randomPic)})

  }

  render() {
    return (
      <div>

      <Navbar />

        <div className="tarotAppDiv">
          <center>
            <div className="row">

              <div className="col-md-5">
                <div id="dailyCardDiv">
                  <center>
                    <h1>Card of the day:</h1>
                     <br />
                      <img src={this.state.dailyPic} id="dailyCardPic" />
                        <h3>{this.state.cardMeaning}</h3>
                          <hr id="dailyCardHr"/>
                            <br />
                          <p id="cardDescription">{this.state.cardDesc}</p>
                        <br />
                     <p><em>Content reference credit: <a href="https://www.daily-tarot-girl.com/tarot-card-meanings/list-of-tarot-card-meanings/" target="_blank">https:daily-tarot-girl.com/tarot-card-meanings/...</a></em></p>
                   </center>
                </div>
              </div>


              <div className="col-md-7">
                <div id="pickACardDiv">

                <div className="blackDiv">
                  <h1>Have a question? Pick 5 cards:</h1>
                </div>
                <br />
                {
                  // HORIZONTAL TAROT CARD DECK
                }
                <center>
                  <div className="card" onClick={this.handleTarotClick.bind(this)}>
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                  <div className="card" onClick={this.handleNumTest.bind(this)}>
                  </div>

                </center>
                </div>
              </div>

            </div>
          </center>
        </div>

        <Footer />

      </div>
    );
  }
}

export default connect()(TarotApp);
