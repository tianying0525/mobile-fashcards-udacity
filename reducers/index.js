import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD_TO_DECK, QUIZ_RESULT, RESET_SCORE_AND_INDEX } from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };

        case ADD_DECK:
            const newDeck = state.decks.slice()
            newDeck.push(action.deck)
            return {
                ...state,
                decks: newDeck
            }
        case REMOVE_DECK: {
            return {
                ...state,
                decks: state.decks.filter(deck => deck.id !== action.id)
            }
        }

        case ADD_CARD_TO_DECK: {
            return {
                ...state,
                decks: state.decks.map(deck => {
                    if (deck.id === action.deckId) {
                        return {
                            ...deck,
                            decks: deck.cards.push(action.card)
                        }
                    }
                    return deck
                })
            }
        }

        case QUIZ_RESULT: {
            return {
                ...state,
                decks: state.decks.map(deck => {
                    if (deck.id === action.deckId) {
                        return {
                            ...deck,
                            score:
                                action.myAnswer === 'correct' ? deck.score + 1 : deck.score,
                            cardIndex:
                                deck.cardIndex === deck.cards.length - 1
                                    ? 0
                                    : deck.cardIndex + 1
                        }
                    }
                    return deck
                })
            }
        }
        case RESET_SCORE_AND_INDEX: {
            return {
                ...state,
                decks: state.decks.map(deck => {
                    if (deck.id === action.deckId) {
                        return {
                            ...deck,
                            score: 0,
                            cardIndex: 0
                        }
                    }
                    return deck
                })
            }
        }
        default:
            return state
    }

}

export default decks
