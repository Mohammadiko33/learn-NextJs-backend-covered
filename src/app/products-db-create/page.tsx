import SubmitBtn from '@/Components/SubmitBtn'
import { addProduct } from '@/prisma-db'
import { redirect } from 'next/navigation'
import React from 'react'

const AddProductPage = () => {

  async function createProduct(formData: FormData) {
      "use server"
      const title = formData.get("title") as string
      const price = formData.get("price") as string
      const desc = formData.get("desc") as string

      await addProduct(title , parseInt(price) , desc)
      redirect("/product-db")
  }


  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <input type="text" name="title" placeholder="enter title ..." className="placeholder-white block w-full p-2 text-black border-rounded" />
      <input type="text" name="price" placeholder="enter price ..." className="placeholder-white block w-full p-2 text-black border-rounded" />
      <textarea name="desc" placeholder="enter price ..." className="placeholder-white block w-full p-2 text-black border-rounded" />
      <SubmitBtn/>
    </form>
  )
}

export default AddProductPage