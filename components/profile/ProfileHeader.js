import React from "react";
import BlueButtonFull from "../BlueButtonFull";
import TransparentButtonFull from "../TransparentButtonFull";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

const ProfileHeader = () => {
  const name = "Prophet Bestman";
  return (
    <div className=" py-12 text-text">
      <div className="h-auto lg:h-[267px] items-center grid grid-cols-3">
        <ProfileImage />
        <ProfileDescription />
      </div>
      <div className="block sm:hidden">
        <p className="font-bold">{name}</p>
        <p className="w-[60%] text-xs mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          dolores commodi tenetur consequatur aspernatur ex.
        </p>
        <div className="block sm:hidden">
          {/* <BlueButtonFull>Follow</BlueButtonFull> */}
          <TransparentButtonFull>Edit Profile</TransparentButtonFull>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
