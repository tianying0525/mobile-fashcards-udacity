export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const QUIZ_RESULT = 'QUIZ_RESULT'
export const RESET_SCORE_AND_INDEX = 'RESET_SCORE_AND_INDEX'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck
    }
}

export function removeDeck(id) {
    return {
      type: REMOVE_DECK,
      id
    }
  }

export function addCardToDeck(card, deckId) {
    return {
      type: ADD_CARD_TO_DECK,
      card,
      deckId
    }
  }

  export function quizResult(deckId, myAnswer) {
    return {
      type: QUIZ_RESULT,
      deckId,
      myAnswer
    }
  }
  
  export function resetScoreAndIndex(deckId) {
    return {
      type: RESET_SCORE_AND_INDEX,
      deckId
    }
  }
  
  export const fetchDecks = () => {
    return dispatch => {
      return api.getDecks().then(deck => {
        if (deck !== null) {
          const decks = Object.keys(deck).map(key => deck[key])
          dispatch(receiveDecks(decks))
        }
      })
    }
  }
