import { notFound } from "next/navigation";
import React from "react";

interface IReviewDetail {
  params: Promise<{ productId: string; reviewId: string }>;
}

const ReviewDetail = async ({params}: IReviewDetail) => {

    const {productId} = (await params)
    const {reviewId} = (await params)

    if (parseInt(productId) > 100){
      return notFound()
    }

  return <div>ReviewDetail Product {productId} and with review count {reviewId}</div>;
};

export default ReviewDetail;