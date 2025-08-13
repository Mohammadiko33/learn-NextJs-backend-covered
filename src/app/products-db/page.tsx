import React from "react";
import { getProducts } from "@/prisma-db";
import { IProduct } from "@/Components/types";

const Page = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <ul className="space-y-4 p-4">
      {products.map(({ id, title, price, desc }) => (
        <li
          key={id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="">{desc}</p>
          <p className="text-lg font-medium">${price}</p>
        </li>
      ))}
    </ul>
  );
};

export default Page;
