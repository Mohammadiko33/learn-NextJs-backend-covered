import React from "react";

interface IReviewDetail {
  params: Promise<{ productId: string; reviewId: string }>;
}

const ReviewDetail = async ({params}: IReviewDetail) => {

    const pid = (await params).productId
    const rid = (await params).reviewId

  return <div>ReviewDetail Product {pid} and with review count {rid}</div>;
};

export default ReviewDetail;
