"use client"

import { usePathname } from "next/navigation"


const ReviewNotFound = () => {

    const path = usePathname()
    const productId = path.split("/")[2]
    const commentId = path.split("/")[4]

  return (
    <div className="fullCenter">ReviewNotFound , no product with id {productId} in datas , and maybe sub route is wrong id: {commentId} in db </div>
  )
}

export default ReviewNotFound