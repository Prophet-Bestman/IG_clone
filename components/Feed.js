import React, { useContext } from "react";
import { AuthContext } from "../providers/auth/auth.provider";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <main
      className={`w-full grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-6xl mx-auto ${
        !user && "!grid-cols-1 !max-w-3xl mx-auto"
      }`}
    >
      {/* Left Section */}
      <section className="md:col-span-2 lg:col-span-2 p-0 md:px-3 w-full">
        <Stories />
        <Posts />
      </section>

      {/* Right Section */}
      {!!user && (
        <section className="hidden lg:inline-grid col-span-1 relative w-full">
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
