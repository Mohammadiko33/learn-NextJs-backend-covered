"use client";
import { defualtBtnClass } from "@/app/testReq/page";
import { redirect } from "next/navigation";
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

  const timeClose = 2000

  const handleRedirect = async () => {
    toast.success(`${timeClose.toString().slice(0,1)}s ta redicert to home` , {position: "bottom-right" , autoClose: timeClose})
    setTimeout(() => {
      redirect("/")
    }, timeClose + 750)
  }

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
        <button className={`${defualtBtnClass} bg-blue-500`} onClick={handleRedirect}>redirect at home</button>
      </div>
    </div>
  );
};

export default Heading;

