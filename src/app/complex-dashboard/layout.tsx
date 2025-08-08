import React, { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}

const Layout = ({ children, users, revenue, notifications }: ILayout) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
};

export default Layout;
