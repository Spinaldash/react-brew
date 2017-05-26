import { defaultState } from '../data/sampleData';
import { addDeckCard, subtractDeckCard } from './reducerFunctions';

// Single source of truth
// State is read-only
// Changes are made with pure functions

// TODO: Holy fuck these variable names
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DECK_CARD':
      return addDeckCard(state, action)

    case 'SUBTRACT_DECK_CARD':
      return subtractDeckCard(state, action)

    case 'ADD_LIBRARY_SOURCE':
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_DECK_CARD':
      // Does this replace the deck or add to it? replace, but it copies over the old deck.
      return {
        ...state,
        deck: todo(state.deck, action),
      }
    case 'SUBTRACT_DECK_CARD':
      return {
        ...state,
        deck: todo(state.deck, action),
      }
    case 'ADD_LIBRARY_SOURCE':
      return {
        ...state,
        library: todo(state.library, action),
      }
    default:
      return state
  }
}

export default todos
