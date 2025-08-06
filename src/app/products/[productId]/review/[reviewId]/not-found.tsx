"use client"

import { usePathname } from "next/navigation"


const ReviewNotFound = () => {

    const path = usePathname()
    const productId = path.split("/")[2]
    const reviewId = path.split("/")[4]

  return (
    <div className="fullCenter">ReviewNotFound , no product with id {productId} in datas , and maybe sub route is wrong id: {reviewId} in db </div>
  )
}

export default ReviewNotFound