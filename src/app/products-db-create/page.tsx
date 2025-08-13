import { IformState, IError } from "@/Components/types";
import React, { useActionState } from "react";
import { formState , createProduct } from "@/actions/products"

const AddProductPage = () => {
  const initialState: IformState = { errors: {} };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const desc = formData.get("desc") as string;

    const errors: IError = {};
    if (!title) {
      errors.title = "title is required";
    }
    if (!price) {
      errors.title = "price is required";
    }
    if (!desc) {
      errors.title = "description is required";
    }

    if (Object.keys(errors).length) {
      return { errors };
    }

    await addProduct(title, parseInt(price), desc);
    redirect("/product-db");
  }

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div className="">
        <input
          type="text"
          name="title"
          placeholder="enter title ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.title ? (
          <p className="text-red-600">{state.errors.title}</p>
        ) : null}
      </div>
      <div className="">
        <input
          type="text"
          name="price"
          placeholder="enter price ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.price ? (
          <p className="text-red-600">{state.errors.price}</p>
        ) : null}
      </div>
      <div className="">
        <textarea
          name="desc"
          placeholder="enter price ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.desc ? (
          <p className="text-red-600">{state.errors.desc}</p>
        ) : null}
      </div>
      <button type="submit" className="bg-blue-500 block" disabled={isPending}>
        {isPending ? "Submitting ..." : "Submit"}
      </button>
    </form>
  );
};

export default AddProductPage;
