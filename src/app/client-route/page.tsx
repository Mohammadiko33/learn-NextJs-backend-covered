"use client"
import React from "react"
import { clientSide } from "@/Components/utils/client"
import ImageSlider from "@/Components/ImageSlider"

const ClientRoute = () => {
  const res = clientSide()
  return (
    <div className="">
      <p>ClientRoute , {res}</p>
      <ImageSlider/>
    </div>
  )
}

export default ClientRoute;