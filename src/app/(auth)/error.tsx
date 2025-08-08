"use client"

import { startTransition } from "react";
import { defualtBtnClass } from "../handleSendReq/page";
import { useRouter } from "next/navigation";

interface IError { 
    error: Error,
    reset: () => void;
 }

const Error = ({error , reset}: IError) => {
  const router = useRouter()
const reload = () => {
  startTransition(() => {
    router.refresh();
    reset()
  })
}

  return (
    <div>{error.message} <button onClick={reload} className={`${defualtBtnClass} bg-orange-400`}>Reload</button> <p className="">, you can contact with our admins <a href="developer.iko.mike@gmail.com">developer-iko-mike@gmail.com</a></p></div>
  );
};

export default Error;