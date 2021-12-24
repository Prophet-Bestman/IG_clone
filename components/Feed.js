import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/* Left Section */}
      <section className="md:col-span-2 lg:col-span-2 px-3">
        <Stories />
        <Posts />
      </section>

      {/* Right Section */}
      {session && (
        <section className="hidden lg:inline-grid col-span-1 relative">
          <div className="fixed top-16">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
