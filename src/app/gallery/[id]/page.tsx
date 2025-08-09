import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const {name , image , caption , price}: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{name}</h1>
        </div>
        <Image
          alt={name}
          src={image}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white text-black text-right text-black text-right text-right py-4">
          <h3>{caption}</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}
