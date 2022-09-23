import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authReducer'
import { counterReducer } from './counter/counterReducer'

const rootReducers = {
  auth: authReducer,
  counter: counterReducer
}

export const store = configureStore({ reducer: rootReducers })
