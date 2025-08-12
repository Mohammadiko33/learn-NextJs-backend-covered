"use client"
import React, { useState } from 'react';
import ClientComponentTwo from './Client-component-two';

interface IClientComponentOne {
  children: React.ReactNode
}

const ClientComponentOne = ({children}: IClientComponentOne) => {
  const [name, setName] = useState<string>("Muhammad");
  return (
    <>
      <h1>Client Component One</h1>
      <ClientComponentTwo />
      {children}
    </>
  );
};

export default ClientComponentOne;