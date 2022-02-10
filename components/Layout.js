import React from "react";
import BottomMenu from "./BottomMenu";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <BottomMenu />
    </div>
  );
};

export default Layout;
