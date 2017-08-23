import TarotApp from '../../components/tarotApp.js';
import store from '../../../index.js';
import reducer from '../reducers/index.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const displayCard = () => {

  return {
    type: "CARD_RETURN"
  }

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const displayPersonAdvice = () => {
  return {
    type: "PERSON_ADVICE"
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const displaySituationAdvice = () => {
  return {
    type: "SITUATION_ADVICE"
  }
}
