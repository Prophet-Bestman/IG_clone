import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex justify-between mx-5 max-w-6xl xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid h-24 cursor-pointer">
          <Image src="/instagram.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs my-auto">
          <div className="flex items-center relative mt-2 p-3 rounded-md">
            <div className="absolute pointer-events-none pl-3">
              <SearchIcon className="h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="focus:ring-black rounded-md sm:text-sm bg-gray-50 border-gray-300 focus:border-black pl-10"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex space-x-4 items-center">
          <MenuIcon className="navMenu" />
          <HomeIcon className="navBtn" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="notification ">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img src="/dp.jfif" alt="" className="rounded-full h-10 navBtn" />
        </div>
      </div>
    </div>
  );
}

export default Header;
