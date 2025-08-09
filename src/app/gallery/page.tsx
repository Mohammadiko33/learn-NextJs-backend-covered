import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        {wonders.map(({ id, image, name }) => (
          <Link key={id} href={`/gallery/${id}`}>
            <Image
              alt={name}
              src={image}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
