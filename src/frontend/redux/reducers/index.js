import TarotApp from '../../components/tarotApp.js';
import store from '../../../index.js';

const initialState = {
  cardPic: [
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
  ],
  cardPicArray: [],
  card: "",
  personData: "",
  situationData: "",
  counter: 0
}

export default (state = initialState, action) => {

    switch (action.type) {
      case "CARD_DATA":

      // RESTRICT CARDS TO 5 BY REMOVING THE EVENT LISTNER
      if (state.counter >= 4) {
        document.getElementsByClassName('cardScrollDiv')[0].style.pointerEvents = "none";
      }

      console.log("Card Information");
      console.log(state.cardPicArray);

      // GET THE UL, CREATE AN LI AND ADD A ID TO IT
      const cardUL = document.getElementById('cardDisplayUl');
      const cardListItem = document.createElement("LI");
      cardListItem.setAttribute('id', 'tarotCardLi');

      // CREATE THE IMAGE TAG
      const imageTag = document.createElement("IMG");
      imageTag.setAttribute('id', 'tarotCardArrayPic');
      imageTag.src = state.cardPic[Math.floor(Math.random() * state.cardPic.length)];

      // MOUNT THE IMAGE TAG ONTO THE LI
      cardListItem.appendChild(imageTag);

      // MOUNT THE LIST ITEM (WITH THE IMAGE TAG) ONTO THE UL
      cardUL.appendChild(cardListItem)

      cardListItem.addEventListener('click', function() {

          const cardModal = document.getElementsByClassName('tarotModalDiv')[0];
          cardModal.style.display = 'initial';

          // CLICK ON BACK GROUND TO EXIT MODAL
          window.onclick = function(event) {
            if (event.target === cardModal) {
              cardModal.style.display = "none";
            }
          }

      }) // END EVENT LISTENER FUNCTION (LINE 56)

      // EXIT BUTTON FOR MODAL
      const exitButton = document.getElementById('tarotModalExit');
      exitButton.onclick = function(event) {

        const cardModal = document.getElementsByClassName('tarotModalDiv')[0];

        if (event.target === exitButton) {
          cardModal.style.display = "none";
        }
      }

      // BASED ON CARD CLICKED, RENDER CARD DESCRIPTION
      //...

        return Object.assign({}, state, {
          // cardPic: state.cardPic.concat(state.cardPic[Math.floor(Math.random() * state.cardPic.length)]),
          cardPicArray: state.cardPicArray.concat(state.cardPic[Math.floor(Math.random() * state.cardPic.length)]),
          card: state.card.replace(state.card, "Card Name"),
          personData: state.personData.replace(state.personData, "Person Data"),
          situationData: state.situationData.replace(state.situationData, "Situation Data"),
          counter: state.counter + 1
        })

      default:
        return state

    }

}
