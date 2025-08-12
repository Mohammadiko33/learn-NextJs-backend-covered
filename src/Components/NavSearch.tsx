"use client"
import { useState } from "react";
export default function NavSearch() {
    const [val , setVal] = useState<string>("")
    console.log("nav search rendered")
  return <div>NavSearch input</div>;
}