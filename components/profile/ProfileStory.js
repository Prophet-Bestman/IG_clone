import React from "react";

const ProfileStory = ({ img, name }) => {
  return (
    <div className="pr-1">
      <div className="h-16 relative cursor-pointer w-16 rounded-full border-2 border-red-500 hover:scale-110 transition-all transform duration-150 ease-out">
        <img src={`${img}`} alt="" className="rounded-full object-contain" />
      </div>
      <p className="truncate mx-auto text-center text-xs w-14">{name}</p>
    </div>
  );
};

export default ProfileStory;
