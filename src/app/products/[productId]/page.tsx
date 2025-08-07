import { Metadata } from 'next';

interface IProductDetail { params: Promise<{productId: string}> }

export const generateMetadata = async ({params}: IProductDetail): Promise<Metadata> => {
    const {productId} = (await params)
    return {
      title: `Product ${productId}`
    }
}

const ProductDetail = async ({params}: IProductDetail) => {

    const {productId} = (await params)

    return (
    <div>ProductDetail: {productId}</div>
  );
};

export default ProductDetail;