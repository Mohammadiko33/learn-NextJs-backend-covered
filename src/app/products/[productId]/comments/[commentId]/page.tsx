import { notFound } from "next/navigation";
import React from "react";

interface IReviewDetail {
  params: Promise<{ productId: string; commentId: string }>;
}

const ReviewDetail = async ({params}: IReviewDetail) => {

    const {productId} = (await params)
    const {commentId} = (await params)

    if (parseInt(commentId) > 100){
      return notFound()
    }

  return <div className="fullcenter">ReviewDetail Product {productId} and with comment count {commentId}</div>;
};

export default ReviewDetail;