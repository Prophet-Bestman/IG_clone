import React from "react";
import BlueButton from "../BlueButton";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

const ProfileDescription = () => {
  const username = "prophetbestman";
  const name = "Prophet Bestman";
  const postsCount = "1,230";
  const followers = "4M";
  const following = "1,250";
  return (
    <div className="col-span-2 py-4 text-text">
      <div className="hidden sm:block">
        <span className="text-[28px] font-[350] mr-5">{username}</span>
        <span>
          <BlueButton>Follow</BlueButton>
          <DotsHorizontalIcon className="h-5 inline-block px-3" />
        </span>
      </div>
      <div className="flex justify-around sm:justify-start py-5">
        <span>
          <span className="font-bold block sm:inline-grid text-center">
            {postsCount + " "}
          </span>
          <span className="text-center sm:mr-5"> posts</span>
        </span>
        <span>
          <span className="font-bold block sm:inline-grid text-center">
            {followers + " "}
          </span>
          <span className="text-center sm:mr-5"> followers</span>
        </span>
        <span>
          <span className="font-bold block sm:inline-grid text-center">
            {following + " "}
          </span>
          <span className="text-center sm:mr-5"> following</span>
        </span>
      </div>
      <div className="hidden sm:block">
        <p className="font-bold">{name}</p>
        <p className="w-[60%] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          dolores commodi tenetur consequatur aspernatur ex.
        </p>
      </div>
    </div>
  );
};

export default ProfileDescription;
