"use client";

import { useRouter } from "next/navigation";
import { defualtBtnClass } from "./handleSendReq/page";

const GlobalError = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => router.refresh()}
        className={`${defualtBtnClass} bg-blue-500`}
      >
        refresh
      </button>
    </div>
  );
};

export default GlobalError;
