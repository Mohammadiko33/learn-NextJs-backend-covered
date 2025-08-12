import React from "react";
import { RiseLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RiseLoader loading={true} color="#4f46e5" size={40} />
    </div>
  );
}
