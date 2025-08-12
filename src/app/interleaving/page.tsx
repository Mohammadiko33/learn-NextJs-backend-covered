import ClientComponentOne from "@/Components/Client-component-one";
import ServerComponentOne from "@/Components/Server-component-one";
import React from "react";

const InterLeaving = () => {
  return (
    <div className="fullcenter">
      <h1 className="">InterLeaving page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};

export default InterLeaving;
