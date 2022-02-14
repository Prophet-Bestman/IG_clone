import React from "react";

const BlueButtonFull = ({ children }) => {
  return (
    <button className="w-full text-center py-1 rounded text-sm font-semibold text-white  bg-primaryBtn hover:bg-blue-500 mr-10">
      {children}
    </button>
  );
};

export default BlueButtonFull;
