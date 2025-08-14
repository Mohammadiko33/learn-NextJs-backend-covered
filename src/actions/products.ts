"use server";

import { addProduct, updateProduct } from "@/prisma-db";
import { deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  desc?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!desc) {
    errors.desc = "desc is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseInt(price), desc);
  redirect("/products-db");
}

export async function editProduct(prevState: FormState, formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;

  const errors: Errors = {};

  if (!title) errors.title = "Title is required";
  if (!price) errors.price = "Price is required";
  if (!desc) errors.desc = "Description is required";

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
