import { createReducer } from '@reduxjs/toolkit'
import { addDispatch, minusDispatch, resetDispatch } from './counterAction'

const initialState = { counter: 0 }

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDispatch, (state, action) => { state.counter++ })
    .addCase(minusDispatch, (state, action) => { state.counter-- })
    .addCase(resetDispatch, (state, action) => initialState)
    .addDefaultCase((state, action) => initialState)
})
