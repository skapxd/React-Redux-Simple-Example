import { combineReducers, createStore } from 'redux'
import { reducerAuth } from '../modo_1/reducer/AuthReducer'
import { reducerCounter } from '../modo_1/reducer/CounterReducer'

const rootReducer = combineReducers({
  auth: reducerAuth,
  counter: reducerCounter
})

// Store
export const store = createStore(rootReducer)
