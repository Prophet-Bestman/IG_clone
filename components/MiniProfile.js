// import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

import { AuthContext } from "../providers/auth/auth.provider";

const MiniProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
      localStorage.clear();
      router.reload();
    });
  };

  return (
    <div className="flex justify-between items-center mt-14">
      <img src="/dp.jfif" alt="" className="rounded-full border p-[2px] w-16" />
      <div className="mx-7">
        <h2 className="font-bold">{user?.email}</h2>
        <h3 className="text-sm text-gray-500">Welcome to instagram</h3>
      </div>

      <button
        onClick={handleSignOut}
        className="text-blue-500 ml-auto font-semibold text-sm"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
