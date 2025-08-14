import React from "react";
import { getProducts } from "@/prisma-db";
import { IProduct } from "@/Components/types";
import Link from "next/link";
import { removeProduct } from "@/actions/products";

const Page = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <ul className="space-y-4 p-4">
      {products.map(({ id, title, price, desc }) => (
        <li
          key={id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${id}`}>{title}</Link>  
          </h2>
          <p className="">{desc}</p>
          <p className="text-lg font-medium">${price}</p>
          <form action={removeProduct.bind(null , id)}>
          <button className="bg-red-500 mt-4" type="submit">Delete</button>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default Page;
