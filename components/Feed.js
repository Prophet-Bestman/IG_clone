import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-6xl mx-auto">
      {/* Left Section */}
      <section className="md:col-span-1 lg:col-span-2 px-3">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {/* Right Section */}
      <section>
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
}

export default Feed;
