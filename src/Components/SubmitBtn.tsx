"use client";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="bg-blue-500 block" disabled={pending}>
      {pending ? "Submitting ..." : "Submit"}
    </button>
  );
}