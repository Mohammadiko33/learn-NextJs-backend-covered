"use client"
import NavSearch from "./NavSearch"
import NavLinks from "./NavLinks"
import { useState } from "react";

export default function NavBar() {
  const [val , setVal] = useState<string>("")

    console.log("navBar rendering")
  return (
    <div>
        <NavSearch/>
        <NavLinks/>
    </div>
  )
}
