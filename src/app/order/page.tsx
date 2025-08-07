"use client";
import { useRouter } from "next/navigation";
import { defualtBtnClass } from "../handleSendReq/page";

const Order = () => {
    const router = useRouter()
  const handleClick = () => {
    // router.push("/") // <Link href="/">Home</Link>
    router.replace("/") // <Link href="/" replace>Home</Link>
  };

  return (
    <div className="rsc">
      <button
        className={`${defualtBtnClass} bg-green-600`}
        onClick={handleClick}
      >
        Order
      </button>
    </div>
  );
};

export default Order;
