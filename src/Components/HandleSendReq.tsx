"use client";
import React from "react";

const HnadleSendReq = () => {
  const BASE_URL = "http://localhost:3000/api/users";

  const handleReqGET = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
  };

  const handleReqGET1 = async () => {
    const res = await fetch(BASE_URL + "/1");
    const data = await res.json();
    console.log(data);
  };

  const handleReqPOST = async () => {
    const newUserData = {
      username: "tokhma sag",
      gmail: "tokhmas@gmail.com",
      password: "tokhtokh",
    };
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
    console.log(res);
  };

  const handleReqPATCH = async () => {
    const res = await fetch(BASE_URL, { method: "PUT" });
    const data = await res.json()
    console.log(data);
  }

  const handleReqPUT = async () => {
    const res = await fetch(BASE_URL, { method: "PUT" });
    const data = await res.json()
    console.log(data);
  };
  const handleReqDELETE = async () => {
    const res = await fetch(BASE_URL + "/3", { method: "DELETE" });
    const data = await res.json()
    console.log(data);
  };

  const defualtBtnClass = `px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80`;

  return (
    <div className="flex justify-between w-2/6">
      <button
        onClick={handleReqGET}
        className={`${defualtBtnClass} bg-emerald-500`}
      >
        GET
      </button>
      <button
        onClick={handleReqGET1}
        className={`${defualtBtnClass} bg-green-500`}
      >
        GET N.1
      </button>
      <button
        onClick={handleReqPOST}
        className={`${defualtBtnClass} bg-sky-500`}
      >
        POST
      </button>
      <button
        onClick={handleReqPATCH}
        className={`${defualtBtnClass} bg-yellow-500`}
      >
        PATCH
      </button>
      <button
        onClick={handleReqPUT}
        className={`${defualtBtnClass} bg-orange-500`}
      >
        PUT
      </button>
      <button
        onClick={handleReqDELETE}
        className={`${defualtBtnClass} bg-rose-500`}
      >
        DELETE
      </button>
    </div>
  );
};

export default HnadleSendReq;
