import { createReducer } from '@reduxjs/toolkit'
import { logInDispatch, logOutDispatch } from './authAction'

const initialState = { auth: false }

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logInDispatch, (state, action) => { state.auth = true })
    .addCase(logOutDispatch, (state, action) => { state.auth = false })
    .addDefaultCase((state, action) => state)
})
