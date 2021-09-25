import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import {
    addDispatch,
    minusDispatch,
    resetDispatch,
} from '../redux/modo_1/action/CounterAction'
import { nameLoginScreen } from './LoginScreen'

export const nameProductoScreen = '/product'

export const ProductoScreen = () => {
    const { counter, auth } = useSelector((s) => s)

    const dispatch = useDispatch()

    const history = useHistory()

    if (!auth) {
        history.replace(nameLoginScreen)
    }

    return (
        <div>
            <Link to={nameLoginScreen}> Go back </Link>

            <p>Producto</p>

            <p>{counter ?? 'dont number'}</p>

            <button onClick={() => dispatch(minusDispatch())}>-1</button>
            <button onClick={() => dispatch(resetDispatch())}>reset</button>
            <button onClick={() => dispatch(addDispatch())}>+1</button>
        </div>
    )
}
