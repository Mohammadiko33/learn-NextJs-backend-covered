"use client";

import { IformState } from "@/Components/types";
import { createProduct as createProductAction } from "@/actions/products";
import { useFormState, useFormStatus } from "react-dom";

const initialState: IformState = { errors: {} };

export default function AddProductPage() {
  const [state, formAction] = useFormState(createProductAction, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <input
          type="text"
          name="title"
          placeholder="enter title ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.title && (
          <p className="text-red-600">{state.errors.title}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="price"
          placeholder="enter price ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.price && (
          <p className="text-red-600">{state.errors.price}</p>
        )}
      </div>

      <div>
        <textarea
          name="desc"
          placeholder="enter description ..."
          className="placeholder-white block w-full p-2 text-black border-rounded"
        />
        {state.errors.desc && (
          <p className="text-red-600">{state.errors.desc}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 block" disabled={pending}>
        {pending ? "Submitting ..." : "Submit"}
      </button>
    </form>
  );
}
