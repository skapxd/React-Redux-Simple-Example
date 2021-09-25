import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nameProductoScreen } from './ProductoScreen'
import { useDispatch } from 'react-redux'
import {
    logInDispatch,
    logOutDispatch,
} from '../redux/modo_1/action/AuthAction'

export const nameLoginScreen = '/'

export const LoginScreen = () => {
    const dispatch = useDispatch()

    const [localAuth, setlocalAuth] = useState({
        email: false,
        pass: false,
    })

    useEffect(() => {
        if (localAuth.email && localAuth.pass) {
            dispatch(logInDispatch())
        } else {
            dispatch(logOutDispatch())
        }
        console.log(localAuth)
    }, [localAuth])

    const email = '123'
    const pass = '123'

    return (
        <div>
            <p>Login</p>

            <div>
                <input
                    type="email"
                    name="email"
                    id=""
                    onChange={(e) => {
                        let isValid = false
                        if (e.target.value === email) {
                            isValid = true
                        }
                        console.log(e.target.value)
                        setlocalAuth((s) => ({ ...s, email: isValid }))
                    }}
                />
            </div>

            <div>
                <input
                    type="password"
                    name="email"
                    id=""
                    onChange={(e) => {
                        let isValid = false
                        if (e.target.value === pass) {
                            isValid = true
                        }
                        console.log(e.target.value)
                        setlocalAuth((s) => ({ ...s, pass: isValid }))
                    }}
                />
            </div>

            <Link to={nameProductoScreen}>Link to product</Link>
        </div>
    )
}
