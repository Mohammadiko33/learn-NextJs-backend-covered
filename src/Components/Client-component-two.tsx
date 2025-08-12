"use client"

import { useState } from "react"

export default function ClientComponentTwo() {
    const [name , setName] = useState<string>("Muhammad")
  return (
    <h1>Client Component Two</h1>
  )
}
