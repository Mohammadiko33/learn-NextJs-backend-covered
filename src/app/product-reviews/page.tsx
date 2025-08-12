import Product from "@/Components/Product";
import Review from "@/Components/Review";
import { Suspense } from "react";

const ProductReviews = () => {
  return (
    <div className="fullcentercol">
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>loading product ...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading review ...</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductReviews;
