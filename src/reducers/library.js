import { defaultState } from '../data/sampleData';

const todo = (state = [], action) => {
  console.log('running todo reducer');
  console.log('action: ', action)
  switch (action.type) {
    case 'ADD_CARD':
      return [...state, {
        id: action.id,
        cardName: action.cardName,
        completed: false,
        count: '1'
      }]
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
  console.log('in root reducer action: ', action.type)
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        deck: todo(state.deck, action),
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
