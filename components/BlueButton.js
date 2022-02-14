import React from "react";

const BlueButton = ({ children }) => {
  return (
    <button className="px-6 py-2 rounded text-sm font-semibold text-white  bg-primaryBtn hover:bg-blue-500 mr-10">
      {children}
    </button>
  );
};

export default BlueButton;
