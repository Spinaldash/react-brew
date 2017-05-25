import { defaultState } from '../data/sampleData';

// Single source of truth
// State is read-only
// Changes are made with pure functions

// TODO: Holy fuck these variable names
const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...state, {
        id: action.id,
        cardName: action.cardName,
        completed: false,
        count: '1'
      }]
    case 'ADD_LIBRARY_SOURCE':
      return {
        ...state,
        ...action.payload
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      // Does this replace the deck or add to it? replace, but it copies over the old deck. 
      return {
        ...state,
        deck: todo(state.deck, action),
      }
    case 'ADD_LIBRARY_SOURCE':
      return {
        ...state,
        library: todo(state.library, action),
      }
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
