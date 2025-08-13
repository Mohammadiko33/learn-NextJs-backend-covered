"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { IError, IformState } from "@/Components/types";

export async function createProduct(prevState: IformState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("description") as string;

  const errors: IError = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!desc) {
    errors.desc = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseInt(price), desc);
  redirect("/products-db");
}

export async function editProduct(
  id: number,
  prevState: IformState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("description") as string;

  const errors: IError = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!desc) {
    errors.desc = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, parseInt(price), desc);
  redirect("/products-db");
}

export async function removeProduct(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
