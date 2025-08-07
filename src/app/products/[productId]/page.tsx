import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IProductDetail { params: Promise<{productId: string}> }

export const generateMetadata = async ({params}: IProductDetail): Promise<Metadata> => {
    const {productId} = (await params)
    return {
      title: `Product ${productId}`
    }
}

const ProductDetail = async ({params}: IProductDetail) => {
  
  const {productId} = (await params)
  
  if (parseInt(productId) > 100){
    return notFound()
  }

    return (
    <div className='fullcenter'>ProductDetail: {productId}</div>
  );
};

export default ProductDetail;