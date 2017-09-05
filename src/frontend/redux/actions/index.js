import TarotApp from '../../components/tarotApp.js';
import store from '../../../index.js';
import reducer from '../reducers/index.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FUNCTION THAT WILL DISLAY THE TAROT CARD
export const cardData = () => {

  return {
    type: "CARD_DATA"
  }

}
// // FUNCTION THAT WILL DISLAY THE TAROT CARD
// export const displayCard = () => {
//
//   return {
//     type: "CARD_RETURN"
//   }
//
// }
//
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // FUNCTION THAT WILL SHOW THE PERSON ADVICE
// export const displayPersonAdvice = () => {
//   return {
//     type: "PERSON_ADVICE"
//   }
// }
//
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // FUNCTION THAT WILL SHOW THE SITUATION ADVICE
// export const displaySituationAdvice = () => {
//   return {
//     type: "SITUATION_ADVICE"
//   }
// }
