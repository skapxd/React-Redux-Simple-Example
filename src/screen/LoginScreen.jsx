import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nameProductoScreen } from './ProductoScreen'
import { useDispatch, useSelector } from 'react-redux'
import {
    logInDispatch, logOutDispatch,
} from '../redux/modo_1/action/AuthAction'

export const nameLoginScreen = '/'

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const auth = useSelector((s) => s.auth)

    const initialAuth = {
        email: false,
        pass: false,
    }

    const [localAuth, setlocalAuth] = useState( initialAuth )

    const validInputs = () => {
        return (localAuth.email && localAuth.pass)
    }

    const email = 'Admin'
    const pass = 'Admin'

    if( auth ){

        return(

            <div className='container'>

                <div className='row d-flex justify-content-center align-items-center'>

                    <div className='col-5 my-5'>

                        <div className='text-center  my-5'>

                            <h1>Logged</h1>
                            
                        </div>

                        <Link className='btn btn-outline-primary w-100 mb-2' to={nameProductoScreen}>Go to counter</Link>

                        <button 
                            className='w-100 btn btn-outline-danger'
                            onClick={ () => { 

                                dispatch(logOutDispatch())
                                setlocalAuth(initialAuth)

                            }}>
                                Log out
                        </button>

                    </div>
                    
                </div>

            </div>

        )

    }

    return (
        <div className='container'>

            <div className='row d-flex justify-content-center align-items-center'>
                 <div className='col-5 my-5'>

                    <div className='text-center my-5'>

                        <h1>Login</h1>
                        
                    </div>

                    <div class="mb-2">
                        <input 
                            type="email" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email address"
                            onChange={(e) => {
                                let isValid = false
                                if (e.target.value === email) {
                                    isValid = true
                                }
                                setlocalAuth((s) => ({ ...s, email: isValid }))
                            }}
                            />
                    </div>

                    <div class="mb-4">

                        <input 
                            type="email" 
                            class="form-control" 
                            name="password" 
                            placeholder="Password" 
                            onChange={(e) => {

                                let isValid = false
                                if (e.target.value === pass) {
                                    isValid = true
                                }

                                setlocalAuth((s) => ({ ...s, pass: isValid }))
                            }}
                            />

                    </div>

                    <button 
                        className='w-100 btn btn-outline-primary' 
                        disabled={ !validInputs() }
                        onClick={ () => dispatch(logInDispatch())}>
                            Log in
                    </button>

                </div>
            </div>

        </div>
    )
}
