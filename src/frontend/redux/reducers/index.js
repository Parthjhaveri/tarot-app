const initialState = {

  card: "",
  personData: "",
  situationData: "",
  num: 0
}

export default (state = initialState, action) => {

    switch (action.type) {
      case 'CARD_RETURN':
        return Object.assign({}, state, {
          card: state.card.replace(state.card, "Tarot Card!")
        })
        console.log(state.card)

      case 'PERSON_ADVICE':
        return Object.assign({}, state, {
          personData: state.personData.replace(state.personData, "Person Data")
        })
        console.log("Person!")

      case 'SITUATION_ADVICE':
        return Object.assign({}, state, {
          situationData: state.situationData.replace(state.situationData, "Situation Data")
        })
        console.log("Advice!")

      default:
        return state

    }

}
