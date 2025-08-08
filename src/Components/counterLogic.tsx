"use client"
import { defualtBtnClass } from "@/app/handleSendReq/page"
import { useState } from "react"

const CounterLogic = () => {
  const [count , setCount] = useState(0)
  return <button onClick={() => setCount(prev => prev + 1)} className={`${defualtBtnClass} bg-blue-500`}>click me ({count})</button>
}

export default CounterLogic;