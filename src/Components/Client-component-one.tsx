"use client";

import { useState } from "react";
import ClientComponentTwo from "./Client-component-two";
import ServerComponentTwo from "./Server-component-two";

export default function ClientComponentOne() {
  const [name, setName] = useState<string>("Muhammad");
  return (
    <>
      <h1>Client Component One</h1>
      <ServerComponentTwo />
    </>
  );
}
