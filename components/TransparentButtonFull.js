import React from "react";

const TransparentButtonFull = ({ children }) => {
  return (
    <button className="w-full text-center py-1 rounded text-sm font-semibold text-text border border-gray-300  bg-white hover:bg-gray-200 mr-10">
      {children}
    </button>
  );
};

export default TransparentButtonFull;
