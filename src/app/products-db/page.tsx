import ProductDetail from "@/Components/product-detail";
import { IProduct } from "@/Components/types";
import { getProducts } from "@/prisma-db";

const Productdb = async () => {
  const products: IProduct[] = await getProducts();

  return <ProductDetail products={products} />
};

export default Productdb;
