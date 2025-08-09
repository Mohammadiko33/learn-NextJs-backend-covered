"use client";
import { defualtBtnClass } from "@/app/testReq/page";
import { toast, ToastContainer } from "react-toastify";

const Heading = () => {
  const baseUrl = "http://localhost:3000/api/headse/";
  const baseHad = { "Content-Type": "application/json" };

  const handleReqGET = async () => {
    const res = await fetch(baseUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer qaz1xsw2edcvf3rtgbnhtyjmk4uilop",
      },
    });
    const data = await res.json();
    if (data.message) {
      toast.error(data.message, { position: "bottom-right" });
    } else {
      console.log(data);
    }
  };

  return (
    <div className="fullCCenter ">
      <ToastContainer />
      <div className="flex gap-2 mt-6">
        <button
          className={`${defualtBtnClass} bg-green-500`}
          onClick={handleReqGET}
        >
          GET
        </button>
      </div>
    </div>
  );
};

export default Heading;
