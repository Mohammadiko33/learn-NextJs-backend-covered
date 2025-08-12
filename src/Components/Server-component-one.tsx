import fs from "fs";
import ServerComponentTwo from "./Server-component-two";
import ClientComponentOne from "./Client-component-one";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/Server-component-one.tsx", "utf-8");

  return (
    <div>
      <h1 className="">Server Component One</h1>
      <ClientComponentOne/>
      <ServerComponentTwo />
    </div>
  );
}
