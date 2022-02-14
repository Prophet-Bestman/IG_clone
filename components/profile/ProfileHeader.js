import React from "react";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

const ProfileHeader = () => {
  return (
    <div className="h-auto lg:h-[267px] md:grid grid-cols-3 py-12">
      <ProfileImage />
      {/* <ProfileDescription /> */}
    </div>
  );
};

export default ProfileHeader;
