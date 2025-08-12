"use client"
import { serverSide } from "@/Components/utils/server"

const ClientRoute = () => {
  const res = serverSide()
  return (
    <div>ClientRoute , {res}</div>
  )
}

export default ClientRoute