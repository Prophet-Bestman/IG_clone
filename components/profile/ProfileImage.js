import React from "react";

const ProfileImage = () => {
  const img = "/dp.jfif";
  return (
    <div className="col-span-1 px-0 sm:px-4 lg:px-20">
      <div className="p-[1px] border-[1px] inline-grid rounded-full border-gray-200">
        <img
          src={img}
          className="object-cover top border-[1px] border-gray-200 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileImage;
