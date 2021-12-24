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
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="top-0 sticky z-50 bg-white border-b shadow-sm">
      <div className="flex justify-between mx-5 max-w-6xl xl:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:block w-24 cursor-pointer"
        >
          <Image src="/instagram.png" layout="fill" objectFit="contain" />
          {/* <img src="/instagram.png" height="200px" width="120px" alt="" /> */}
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer"
        >
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
          {session && <MenuIcon className="navMenu" />}
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="notification ">3</div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt=""
                className="rounded-full h-10 navBtn"
              />
            </>
          ) : (
            <button className="text-sm w-12 !ml-0 text-blue-500 font-semibold">
              <Link className="text-left" href="/auth/signin">
                Sign in
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
