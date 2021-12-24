import { signOut, useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center mt-14">
      <img
        src={session?.user?.image}
        alt=""
        className="rounded-full border p-[2px] w-16"
      />
      <div className="mx-7">
        <h2 className="font-bold">Prophet Bestman</h2>
        <h3 className="text-sm text-gray-500">Welcome to instagram</h3>
      </div>

      <button
        onClick={signOut}
        className="text-blue-500 ml-auto font-semibold text-sm"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
