"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const CreateProduct = () => {
  const [title , setTitle] = useState<string>("")
  const [price , setPrice] = useState<string>("")
  const [desc , setDesc] = useState<string>("")
  const [loading , setLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios({
        url: "http://localhost:4000/api/react-form",
        method: "POST",
        data: {title , price , desc}
      })
      if (res.status === 200 || res.status === 201){
        router.push("/products-db")
      }
    } catch (err) { console.log("Error" , err) } finally { setLoading(false) }
  }
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <input type="text" name="title" onChange={e => setTitle(e.target.value)} placeholder="enter title ..." className="placeholder-white block w-full p-2 text-black border-rounded" />
      <input type="text" name="price" onChange={e => setPrice(e.target.value)} placeholder="enter price ..." className="placeholder-white block w-full p-2 text-black border-rounded" />
      <textarea name="desc" placeholder="enter price ..." onChange={e => setDesc(e.target.value)} className="placeholder-white block w-full p-2 text-black border-rounded" />
      <button type="submit" className="bg-blue-500 block" disabled={loading}>{loading ? "Submitting ..." : "Submit"}</button>
    </form>
  )
}

export default CreateProduct;