import EditProductForm from "@/Components/product-edit-form";
import { IformState, IParamId } from "@/Components/types";
import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";

const initialState: IformState = { errors: {} };

export default async function EditProductPage({params}: IParamId) {
    const { id } = await params
    const proudct = await getProduct(+id)
    if (!proudct){
        return notFound()
    }
  return <EditProductForm {...proudct} />
}