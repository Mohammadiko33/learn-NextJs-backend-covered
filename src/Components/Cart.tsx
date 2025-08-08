import { IErrorSimulator } from '@/app/error-wrapper'
import React from 'react'

const Cart = ({children} : IErrorSimulator) => {
  return (
    <div className='p-25 m-2.5 shadow-md shadow-white border border-gray-300 flex justify-center items-center'>{children}</div>
  )
}

export default Cart