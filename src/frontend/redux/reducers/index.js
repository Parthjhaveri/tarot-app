import TarotApp from '../../components/tarotApp.js';
import store from '../../../index.js';

const initialState = {
  cardPic: "",
  card: "",
  personData: "",
  situationData: "",
  num: 0
}

export default (state = initialState, action) => {

    switch (action.type) {

      case "CARD_DATA":
      console.log("Card Information");
        return Object.assign({}, state, {
          cardPic: state.card.replace(state.card, "Tarot Card picture"),
          card: state.card.replace(state.card, "Card Name"),
          personData: state.personData.replace(state.personData, "Person Data"),
          situationData: state.situationData.replace(state.situationData, "Situation Data")
        })

      // case "CARD_RETURN":
      // console.log("Card Return!");
      //   return Object.assign({}, state, {
      //     card: state.card.replace(state.card, "Card Name")
      //   })
      //
      // case 'PERSON_ADVICE':
      // console.log("Person Advice!");
      //   return Object.assign({}, state, {
      //     personData: state.personData.replace(state.personData, "Person Data")
      //   })
      //
      // case 'SITUATION_ADVICE':
      // console.log("Situation Advice!");
      //   return Object.assign({}, state, {
      //     situationData: state.situationData.replace(state.situationData, "Situation Data")
      //   })

      default:
        return state

    }

}
