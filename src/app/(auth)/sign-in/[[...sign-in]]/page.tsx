import { SignIn } from '@clerk/nextjs';
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center py-8'><SignIn/></div>
  )
}

export default SignInPage;