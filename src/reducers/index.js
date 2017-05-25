import { combineReducers } from 'redux'
import todos from './library'
import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers
