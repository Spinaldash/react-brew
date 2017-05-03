import { combineReducers } from 'redux'
import todos from './library'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default brewApp
