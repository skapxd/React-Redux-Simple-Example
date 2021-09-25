import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { MainRouter } from './router/MainRouter'

export default () => {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    )
}
