import React from "react";
import { SyncLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader loading={true} color="#4f46e5" size={40} />
    </div>
  );
}