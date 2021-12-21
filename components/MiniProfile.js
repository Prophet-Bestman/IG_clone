import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex justify-between items-center mt-14">
      <img src="/dp.jfif" alt="" className="rounded-full border p-[2px] w-16" />
      <div className="mx-7">
        <h2 className="font-bold">Prophet Bestman</h2>
        <h3 className="text-sm text-gray-500">Welcome to instagram</h3>
      </div>

      <button className="text-blue-500 ml-auto font-semibold text-sm">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
