import TarotApp from '../../components/tarotApp.js';
import store from '../../../index.js';

const initialState = {
  card: "",
  personData: "",
  situationData: "",
  num: 0
}

export default (state = initialState, action) => {

    switch (action.type) {

      case "TEST_NUM":
      console.log("Returned TEST NUM!");
        return Object.assign({}, state, {
          num: state.num + 1
        })

      case "CARD_RETURN":
      console.log("Card Return!");
        return Object.assign({}, state, {
          card: state.card.replace(state.card, "Tarot Card!")
        })

      case 'PERSON_ADVICE':
      console.log("Person Advice!");
        return Object.assign({}, state, {
          personData: state.personData.replace(state.personData, "Person Data")
        })

      case 'SITUATION_ADVICE':
      console.log("Situation Advice!");
        return Object.assign({}, state, {
          situationData: state.situationData.replace(state.situationData, "Situation Data")
        })

      default:
        return state

    }

}
