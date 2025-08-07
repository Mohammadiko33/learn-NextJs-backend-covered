"use client";

import { IUserData } from "../api/users/[id]/route";

export const defualtBtnClass = `px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80`;

const HandleSendReq = () => {
  const BASE_URL = "http://localhost:3000/api/users";
  const BASE_Headers = { "Content-Type": "application/json" };

  const handleReqGET = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    data.map((item: IUserData) => console.log(item));
  };

  const handleReqGET1 = async () => {
    const res = await fetch(BASE_URL + "/1");
    const data = await res.json();
    console.log(data);
  };

  const handleReqPOST = async () => {
    const newUserData = {
      username: "tokhma sag",
      gmail: "tokhmassag@gmail.com",
      password: "tokhtokh",
    };
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: BASE_Headers,
      body: JSON.stringify(newUserData),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleReqPATCH = async () => {
    const updatedFields = {
      username: "UpdatedByPATCH",
    };
    const res = await fetch(BASE_URL + "/1", {
      method: "PATCH",
      headers: BASE_Headers,
      body: JSON.stringify(updatedFields),
    });
    const data = await res.json();
    console.log("PATCH response:", data);
  };

  const handleReqPUT = async () => {
    const newUserData = {
      username: "CompletelyNewUser",
      gmail: "newuser@gmail.com",
      password: "newpassword123",
    };
    const res = await fetch(BASE_URL + "/1", {
      method: "PUT",
      headers: BASE_Headers,
      body: JSON.stringify(newUserData),
    });
    const data = await res.json();
    console.log("PUT response:", data);
  };

  const handleReqDELETE = async () => {
    const res = await fetch(BASE_URL + "/3", { method: "DELETE" });
    const data = await res.json();
    data.map((item: IUserData) => console.log(item));
  };


  return (
    <div className="fullCenter">
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
    </div>
  );
};

export default HandleSendReq;
