"use client"; // error.tsx must be a client component
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg shadow-md border border-red-300 max-w-md text-center">
        <h2 className="text-lg font-bold mb-2">⚠ Error</h2>
        <p>{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
        >
          Retry
        </button>
      </div>
    </div>
  );
}