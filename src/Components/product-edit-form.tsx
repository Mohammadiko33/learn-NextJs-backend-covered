"use client";

import { FormState, editProduct } from "@/actions/products";
import { useActionState } from "react";
import { IProduct } from "./types";

export default function ProductEditForm({ id , title , desc , price }:  IProduct ) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(id);

  const [state, formAction , isPending] = useActionState(editProductWithId, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          desc
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="desc"
            defaultValue={desc ?? ""}
          />
        </label>
        {state.errors.desc && (
          <p className="text-red-500">{state.errors.desc}</p>
        )}
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "Submiting ..." : "Submit"}
      </button>
    </form>
  );
}
