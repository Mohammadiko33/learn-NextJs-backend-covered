"use client";
import React, { useState, ReactNode } from "react";
import { defualtBtnClass } from "./handleSendReq/page";

export interface IErrorSimulator {
  children: ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState<boolean>(false);

  if (error) throw new Error(message);
  return (
    <button
      className={`${defualtBtnClass} text-red-500 bg-red-950`}
      onClick={() => setError(true)}
    >
      Simulate an error
    </button>
  );
};

const ErrorWrapper = ({ children }: IErrorSimulator) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message={"Simulated error in root layout"} />
      </div>
      {children}
    </div>
  );
};

export default ErrorWrapper;
