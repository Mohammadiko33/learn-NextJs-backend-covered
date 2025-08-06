import React from 'react';

interface IProductDetail { params: Promise<{productId: string}> }

const ProductDetail = async ({params}: IProductDetail) => {

    const {productId} = (await params)

    return (
    <div>ProductDetail: {productId}</div>
  );
};

export default ProductDetail;