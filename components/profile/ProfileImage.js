import React from "react";

const ProfileImage = () => {
  const img = "/dp.jfif";
  return (
    <div className="col-span-1 px-4 lg:px-20">
      <div className="p-1 border-[1px] inline-grid rounded-full border-gray-200">
        <img
          src={img}
          className="object-cover top border-[1px] border-gray-200 w-36 h-36 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileImage;
