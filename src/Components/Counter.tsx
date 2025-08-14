"use client"
import { useState } from 'react'
import { useAuth , useUser } from "@clerk/nextjs"

const Counter = () => {
    const [count , setCount] = useState<number>(0)

    const { isLoaded, userId, sessionId, getToken } = useAuth()
    // const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded || !userId) return null

  return <button className='bg-blue-400' onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
}

export default Counter