import {
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../providers/auth/auth.provider";
import { PostModalContext } from "../providers/modals/postmodal.provider";
import Link from "next/link";

const BottomMenu = () => {
  const router = useRouter();

  const { isOpen, openModal } = useContext(PostModalContext);
  const { user, setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
      localStorage.clear();
      router.reload();
    });
  };
  return (
    <div className="bg-white sticky bottom-0 left-0 w-full py-2 shadow-lg flex sm:hidden justify-center">
      <div className="flex space-x-6 items-center">
        {/* {!!user && <MenuIcon className="navMenu" />} */}
        {!!user ? (
          <>
            <HomeIcon
              onClick={() => router.push("/")}
              className="navBtnMobile"
            />
            <div className="navBtnMobile relative">
              <PaperAirplaneIcon className="navBtnMobile rotate-45" />
              <div className="notification ">3</div>
            </div>
            <PlusCircleIcon onClick={openModal} className="navBtnMobile" />
            <UserGroupIcon className="navBtnMobile" />
            <HeartIcon className="navBtnMobile" />
            <img
              onClick={handleSignOut}
              src="/dp.jfif"
              alt=""
              className="rounded-full h-10 navBtnMobile"
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
  );
};

export default BottomMenu;
