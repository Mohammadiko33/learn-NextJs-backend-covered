import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/gallery/wonders";
import Modal from "@/Components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const {name , image , caption , price}: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={name}
        src={image}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white text-black text-right p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3>{caption}</h3>
        <h3>{price}</h3>
      </div>
    </Modal>
  );
}
