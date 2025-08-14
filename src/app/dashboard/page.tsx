import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const DashBoard = async () => {
    const authObj = await auth()
    const userObj = await currentUser()

    console.log(authObj , userObj)
    
  return (
    <div className='fullCenter'>DashBoard</div>
  )
}

export default DashBoard