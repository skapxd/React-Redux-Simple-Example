import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  addDispatch,
  minusDispatch,
  resetDispatch
} from '../reduxToolKit/counter/counterAction'
import { nameLoginScreen } from './LoginScreen'

export const nameProductoScreen = '/product'

export const ProductoScreen = () => {
  const dispatch = useDispatch()
  const { counter } = useSelector((s) => s.counter)

  return (
        <div className='container'>

            <div className='row d-flex justify-content-center align-items-center'>

                <div className='col-5 my-5'>

                    <div className='text-center  my-5'>

                        <h1>Counter</h1>

                    </div>

                    <div className='text-center mb-5'>

                        <h1 className='mb-5 fs-1'>{ counter }</h1>

                        <button className='btn btn-outline-primary mx-1' onClick={() => dispatch(minusDispatch())}>-1</button>
                        <button className='btn btn-outline-primary mx-1' onClick={() => dispatch(resetDispatch())}>Reset</button>
                        <button className='btn btn-outline-primary mx-1' onClick={() => dispatch(addDispatch())}>+1</button>

                    </div>

                    <Link className='btn btn-outline-primary w-100 mb-2' to={nameLoginScreen}> Go back </Link>

                </div>

            </div>

        </div>
  )
}
