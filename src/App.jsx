import React from 'react'
import { Provider } from 'react-redux'
import { store } from './reduxToolKit/store'
import { MainRouter } from './router/MainRouter'
import './index.css'
export default function App () {
  return (
            <Provider store={store}>
                <MainRouter />
            </Provider>
  )
}
