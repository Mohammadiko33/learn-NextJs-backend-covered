"use client";

import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const defualtBtnClass = `px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80`;
export const BASE_Header: { "Content-Type": string } = {
  "Content-Type": "application/json",
};
export default function TestReq() {
  const BASE_URL = "http://localhost:3000/api/testReq";
  const [ipt, setIpt] = useState<string>("");

  const handleReqGET = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log("GET:", data);
  };

  const handleReqPOST = async () => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: BASE_Header,
        body: JSON.stringify({ title: "this is new test title" }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "no json" }));
        console.error("POST error:", res.status, err);
        return;
      }

      const data = await res.json();
      if (data.message) {
        toast.error(data.message, { position: "bottom-right" });
      } else {
        console.log("POST:", data);
      }
    } catch (e) {
      console.error("fetch failed:", e);
    }
  };

  const num = 2;

  const handleReqGETOne = async () => {
    const res = await fetch(BASE_URL + `/${num}`);
    const data = await res.json();
    if (data.message) {
      toast.error(data.message, { position: "bottom-right" });
    } else {
      console.log(data);
    }
  };

  const handleReqPATCH = async () => {
    const res = await fetch(BASE_URL + `/${num}`, {
      method: "PATCH",
      headers: BASE_Header,
      body: JSON.stringify({ title: "updateByPatch" }),
    });
    const data = await res.json();
    if (data.message) {
      toast.error(data.message, { position: "bottom-right" });
    } else {
      console.log(data);
    }
  };

  const handleReqPUT = async () => {
    handleReqPATCH()
  }

  const handleReqDELETE = async () => {
    const res = await fetch(BASE_URL + `/${num}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.message) {
      toast.error(data.message, { position: "bottom-right" });
    } else {
      console.log(data);
    }
  };

  const handleReqGETByFiltred = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ipt && ipt.trim()) {
      if (ipt.length > 2) {
        if (ipt.length < 40) {
          const res = await fetch(BASE_URL + `?title=${ipt.trim()}`);
          const data = await res.json();
          if (data.message) {
            toast.error(data.message, { position: "bottom-right" });
          } else {
            console.log(data);
          }
        } else {
          toast.error("ipt is too long", { position: "bottom-right" });
        }
      } else {
        toast.error("ipt is too small", { position: "bottom-right" });
      }
    } else {
      toast.error("ipt value is empty", { position: "bottom-right" });
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
        <form
          className={`${defualtBtnClass} bg-lime-600 gap-3 flex flex-row-reverse cursor-alias`}
          onSubmit={handleReqGETByFiltred}
        >
          <input
            className="outline-none w-14"
            type="text"
            placeholder="search"
            value={ipt}
            onChange={(e) => setIpt(e.target.value)}
          />
          <button type="submit" className="cursor-pointer">
            GET By
          </button>
        </form>
        <button
          className={`${defualtBtnClass} bg-emerald-500`}
          onClick={handleReqGETOne}
        >
          GET .{num}
        </button>
        <button
          className={`${defualtBtnClass} bg-sky-500`}
          onClick={handleReqPOST}
        >
          POST
        </button>
        <button
          className={`${defualtBtnClass} bg-amber-500`}
          onClick={handleReqPATCH}
        >
          PATCH .{num}
        </button>
        <button
          className={`${defualtBtnClass} bg-orange-500`}
          onClick={handleReqPUT}
        >
          PUT .{num}
        </button>
        <button
          className={`${defualtBtnClass} bg-red-500`}
          onClick={handleReqDELETE}
        >
          DELETE .{num}
        </button>
      </div>
    </div>
  );
}
