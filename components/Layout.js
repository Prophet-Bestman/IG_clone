import React from "react";
import BottomMenu from "./BottomMenu";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="max-w-6xl lg:mx-auto">{children}</div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
